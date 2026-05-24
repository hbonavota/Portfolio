"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import {
  forwardRef,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode
} from "react";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

/**
 * Wraps next/link with the native CSS View Transitions API.
 *
 * - On Chromium browsers, in-app navigations are wrapped in
 *   `document.startViewTransition`, producing the browser's default
 *   cross-fade between routes.
 * - Safari / Firefox / non-supporting browsers: navigation happens
 *   normally without a transition.
 * - Modifier-key clicks, middle-click, target=_blank, and external
 *   (http/mailto/tel/anchor) hrefs always bypass the wrapper so the
 *   browser's native behaviour is preserved.
 * - prefers-reduced-motion: reduce → bypasses the transition wrapper
 *   so the navigation is instant.
 */
export const ViewTransitionLink = forwardRef<HTMLAnchorElement, Props>(
  function ViewTransitionLink({ children, href, onClick, ...rest }, ref) {
    const router = useRouter();

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      if (onClick) onClick(event);
      if (event.defaultPrevented) return;

      // Let the browser handle modifier-key / non-primary-button clicks.
      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }
      if (rest.target === "_blank") return;

      const hrefString = typeof href === "string" ? href : href?.pathname ?? "";
      if (
        !hrefString ||
        hrefString.startsWith("http") ||
        hrefString.startsWith("mailto:") ||
        hrefString.startsWith("tel:") ||
        hrefString.startsWith("#")
      ) {
        return;
      }

      if (typeof document === "undefined") return;
      const startViewTransition = (
        document as Document & {
          startViewTransition?: (cb: () => void) => unknown;
        }
      ).startViewTransition;
      if (typeof startViewTransition !== "function") return;

      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      event.preventDefault();
      startViewTransition.call(document, () => {
        router.push(hrefString);
      });
    };

    return (
      <Link href={href} {...rest} ref={ref} onClick={handleClick}>
        {children}
      </Link>
    );
  }
);
