
import { ArrowUpRight } from "lucide-react";

function Button({
  children,
  href,
  variant = "primary",
  className = "",
}) {
  const styles = {
    primary:
      "bg-green-400 text-black hover:bg-green-300",
    secondary:
      "border border-white/15 text-white hover:border-green-400 hover:text-green-400",
  };

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition ${styles[variant]} ${className}`}
    >
      {children}
      {variant === "primary" && <ArrowUpRight size={18} />}
    </a>
  );
}

export default Button;
