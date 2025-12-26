import { AffirmationGenerator } from '@/components/app/affirmation-generator';

export default function AffirmationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Personalized Affirmations</h2>
        <p className="text-muted-foreground max-w-2xl">
          Create positive statements to support your well-being. Tell us how you feel and what you need, and we'll craft the perfect affirmation for you.
        </p>
      </div>
      <AffirmationGenerator />
    </div>
  );
}
