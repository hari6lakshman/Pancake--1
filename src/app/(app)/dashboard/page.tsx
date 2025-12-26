import { ChatInterface } from '@/components/app/chat-interface';

export default function DashboardPage() {
  return (
    <div className="space-y-8">
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
