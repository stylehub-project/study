'use client';

import { UploadCloud } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';

export function Uploader() {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8 text-center border-2 border-dashed rounded-lg border-primary/50 bg-card/50">
      <UploadCloud className="w-12 h-12 text-primary" />
      <h3 className="mt-4 text-lg font-semibold text-card-foreground">Drag &amp; drop files here</h3>
      <p className="mt-1 text-sm text-muted-foreground">or click to browse</p>
      <Button variant="outline" className="mt-4">
        Browse Files
      </Button>
      <Input type="file" className="hidden" />
      <p className="mt-4 text-xs text-muted-foreground">Supports: Video, Audio, Docs. Max size: 100MB</p>
    </div>
  );
}
