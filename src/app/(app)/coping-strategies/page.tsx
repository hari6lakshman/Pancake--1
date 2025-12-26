import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const strategies = [
  {
    title: '5-4-3-2-1 Grounding Technique',
    description: 'A technique to use during moments of anxiety or panic to ground yourself in the present.',
    steps: [
      'Acknowledge 5 things you can see around you.',
      'Acknowledge 4 things you can touch around you.',
      'Acknowledge 3 things you can hear.',
      'Acknowledge 2 things you can smell.',
      'Acknowledge 1 thing you can taste.',
    ],
  },
  {
    title: 'Box Breathing',
    description: 'A simple and effective breathing exercise to calm your nervous system.',
    steps: [
      'Exhale to a count of four.',
      'Hold your lungs empty for a four-count.',
      'Inhale to a count of four.',
      'Hold your breath for a four-count.',
      'Repeat for several minutes.',
    ],
  },
  {
    title: 'Progressive Muscle Relaxation',
    description: 'This technique involves tensing and then relaxing different muscle groups to relieve tension.',
    steps: [
      'Find a comfortable position and take a few deep breaths.',
      'Start with your feet. Tense the muscles for 5 seconds, then relax for 30 seconds. Notice the difference.',
      'Move up to your calves, thighs, glutes, abdomen, back, arms, hands, neck, and face, tensing and relaxing each group.',
      'Enjoy the feeling of deep relaxation.',
    ],
  },
  {
    title: 'Mindful Observation',
    description: 'Practice mindfulness by focusing your attention on a single object.',
    steps: [
      'Choose an object from your environment (e.g., a plant, a pen, a cloud).',
      'Observe it for a few minutes, noticing its colors, textures, shapes, and any other details.',
      'If your mind wanders, gently bring your focus back to the object.',
      'This helps train your attention and anchor you in the present moment.',
    ],
  },
];

export default function CopingStrategiesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Coping Strategies Library</h2>
        <p className="text-muted-foreground max-w-2xl">
          Here are some evidence-based techniques to help you manage difficult emotions and find calm.
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl">
        {strategies.map((strategy, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-lg font-headline hover:no-underline text-left">
              {strategy.title}
            </AccordionTrigger>
            <AccordionContent className="space-y-4 pt-2">
              <p className="text-muted-foreground">{strategy.description}</p>
              <ul className="space-y-2 list-disc pl-5">
                {strategy.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
