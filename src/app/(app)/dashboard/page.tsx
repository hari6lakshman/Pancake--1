import { ChatInterface } from '@/components/app/chat-interface';
import { MoodCheckin } from '@/components/app/mood-checkin';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">How are you feeling today?</h2>
        <p className="text-muted-foreground">Select a mood to log how you're feeling.</p>
        <div className="mt-4">
          <MoodCheckin />
        </div>
      </div>
      <div className="h-full flex flex-col">
        <div className="mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Chat with Pan cake 🎂</h2>
          <p className="text-muted-foreground">Your warm and friendly AI is here to listen. What's on your mind? 🤗</p>
        </div>
        <ChatInterface />
      </div>
    </div>
  );
}
