'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { provideEncouragement } from '@/ai/flows/provide-encouragement';
import { Loader2, Sparkles } from 'lucide-react';

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
  const [encouragement, setEncouragement] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleMoodSelect = async (mood: Mood) => {
    setSelectedMood(mood);
    setIsLoading(true);
    setEncouragement('');
    try {
      const result = await provideEncouragement({ mood: mood.name, needs: 'general support' });
      setEncouragement(result.encouragementMessage);
    } catch (error) {
      console.error('Error fetching encouragement:', error);
      setEncouragement('I see you. Remember to be kind to yourself today.');
    } finally {
      setIsLoading(false);
    }
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

        {(isLoading || encouragement) && (
          <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg text-center min-h-[68px] flex items-center justify-center">
            {isLoading ? (
              <div className="flex items-center justify-center text-foreground">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                <span>Generating some encouragement for you...</span>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/90 text-left">{encouragement}</p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
