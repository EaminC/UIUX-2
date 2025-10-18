import React from 'react';
import { Card, CardContent } from './ui/card';

export function ModernStatsSection() {
  const stats = [
    { 
      value: '95%', 
      label: 'Employment Rate',
      sublabel: 'within 6 months',
      gradient: 'from-maroon to-maroon-dark'
    },
    { 
      value: '$120k', 
      label: 'Average Salary',
      sublabel: 'starting position',
      gradient: 'from-maroon-dark to-maroon'
    },
    { 
      value: '500+', 
      label: 'Alumni Network',
      sublabel: 'across top companies',
      gradient: 'from-maroon to-maroon-light'
    },
    { 
      value: 'Top 10', 
      label: 'CS Program',
      sublabel: 'nationally ranked',
      gradient: 'from-maroon-light to-maroon'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {stats.map((stat, index) => (
        <Card 
          key={index}
          className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 bg-white group overflow-hidden"
        >
          <CardContent className="p-6 text-center relative overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            <div className="text-4xl font-bold text-maroon mb-2 relative z-10">{stat.value}</div>
            <div className="font-medium text-foreground relative z-10">{stat.label}</div>
            <div className="text-sm text-muted-foreground relative z-10">{stat.sublabel}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
