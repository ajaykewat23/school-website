import React from 'react';
import { X } from 'lucide-react';
import { GalleryImage } from './types';

interface ImageModalProps {
  image: GalleryImage;
  onClose: () => void;
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <div className="relative max-w-6xl w-full">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-auto rounded-lg shadow-2xl"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
          <h3 className="text-2xl font-semibold mb-2">{image.title}</h3>
          <p>{image.description}</p>
        </div>
      </div>
    </div>
  );
}