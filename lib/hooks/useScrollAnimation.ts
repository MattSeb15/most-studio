"use client";

import { useEffect } from 'react';

export function useScrollAnimation() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // For staggered children animations
          if (entry.target.classList.contains('stagger-children')) {
            entry.target.classList.add('visible');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-up, .fade-in, .slide-in-left, .slide-in-right, .scale-up, .stagger-children, .fade-right, .fade-left'
    );
    
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      animatedElements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);
}