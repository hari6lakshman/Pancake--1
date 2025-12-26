import { EncouragementGenerator } from '@/components/app/encouragement-generator';

export default function EncouragementBotPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Encouragement Bot</h2>
        <p className="text-muted-foreground max-w-2xl">
          Get a personalized message from Pan cake 🎂. Tell us how you feel and what you need, and we'll craft the perfect message for you.
        </p>
      </div>
      <EncouragementGenerator />
    </div>
  );
}
