import { MoodCheckin } from '@/components/app/mood-checkin';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Lightbulb, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Welcome back!</h2>
        <p className="text-muted-foreground">How are you feeling today?</p>
      </div>

      <MoodCheckin />

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Daily Affirmation
            </CardTitle>
            <Lightbulb className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">"I am capable of amazing things."</p>
            <Link href="/affirmations" className="text-sm text-accent-foreground hover:underline">
              Generate a new one &rarr;
            </Link>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Explore Coping Strategies
            </CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <p className="text-lg font-semibold">Deep Breathing Exercises</p>
            <Link href="/coping-strategies" className="text-sm text-accent-foreground hover:underline">
              View all strategies &rarr;
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
