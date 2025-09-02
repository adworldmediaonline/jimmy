import { cn } from '@/lib/utils';

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn('py-16 md:py-24', className)}>
      <div className={cn('container px-4', containerClassName)}>{children}</div>
    </section>
  );
}
