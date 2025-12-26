'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type Mood = {
  name: string;
  emoji: string;
};

const moods: Mood[] = [
  { name: 'Happy', emoji: '😄' },
  { name: 'Calm', emoji: '😌' },
  { name: 'Okay', emoji: '😐' },
  { name: 'Sad', emoji: '😢' },
  { name: 'Anxious', emoji: '😟' },
  { name: 'Angry', emoji: '😠' },
];

export function MoodCheckin() {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);

  const handleMoodSelect = async (mood: Mood) => {
    setSelectedMood(mood);
    // TODO: Store mood in database
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex flex-wrap justify-center gap-4">
          {moods.map((mood) => (
            <Button
              key={mood.name}
              variant={selectedMood?.name === mood.name ? 'default' : 'outline'}
              size="lg"
              className="flex flex-col h-24 w-24 gap-2 rounded-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => handleMoodSelect(mood)}
            >
              <span className="text-4xl">{mood.emoji}</span>
              <span className="text-sm">{mood.name}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
