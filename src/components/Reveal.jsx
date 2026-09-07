import { useEffect, useRef, useState } from "react";

/**
 * 簡單的「滾動到可視範圍時淡入」包裝元件。
 * 用法：<Reveal className="...">內容</Reveal>
 */
export default function Reveal({ children, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </Tag>
  );
}
