import { useEffect, useState, useRef } from 'react';
import { Zap, Building2, Users, Calendar } from 'lucide-react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Zap, value: 10, suffix: '+', label: 'MW Installed', duration: 2500 },
    { icon: Building2, value: 20, suffix: '+', label: 'Projects Completed', duration: 2000 },
    { icon: Users, value: 10, suffix: '+', label: 'Skilled Engineers', duration: 1800 },
    { icon: Calendar, value: 8, suffix: '+', label: 'Years of Excellence', duration: 1600 },
  ];

  const Counter = ({ end, duration }: { end: number; duration: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count}</span>;
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                <Counter end={stat.value} duration={stat.duration} />
                {stat.suffix}
              </div>
              <div className="text-lg text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
