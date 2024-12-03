import React from 'react';
import { Newspaper } from 'lucide-react';
import { theme } from '../styles/theme';
import { newsArticles } from '../data/news';

export function NewsSection() {
  return (
    <div className="rounded-lg shadow-lg p-6 mb-8 border border-primary/20" style={{ background: theme.colors.gradientTransparent }}>
      <div className="flex items-center mb-6">
        <Newspaper className="w-6 h-6 text-primary mr-2" />
        <h2 className="text-xl font-bold text-primary">Latest Veterinary News</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsArticles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 border border-primary/20 hover:border-primary/40"
            style={{ background: theme.colors.gradientTransparent }}
          >
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-primary text-lg mb-2 line-clamp-2">
                {article.title}
              </h3>
              <p className="text-primary/80 text-sm mb-3 line-clamp-3">
                {article.description}
              </p>
              <div className="flex justify-between items-center text-sm mt-4">
                <span className="text-primary font-medium">
                  {article.source}
                </span>
                <span className="text-primary/60">
                  {new Date(article.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}