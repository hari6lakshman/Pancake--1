'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { provideEncouragement } from '@/ai/flows/provide-encouragement';
import { Loader2, Sparkles, Bot } from 'lucide-react';

const formSchema = z.object({
  mood: z.string().min(2, { message: 'Please describe your mood.' }),
  needs: z.string().min(2, { message: 'Please describe what you need.' }),
});

export function EncouragementGenerator() {
  const [encouragement, setEncouragement] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mood: '',
      needs: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setEncouragement('');
    try {
      const result = await provideEncouragement(values);
      setEncouragement(result.encouragementMessage);
    } catch (error) {
      console.error('Error generating encouragement:', error);
      setEncouragement('I see you. Remember to be kind to yourself today. You are doing great!');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Get some encouragement</CardTitle>
              <CardDescription>Fill in the details below to get a personalized message.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <FormField
                control={form.control}
                name="mood"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>My current mood is...</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., a little stressed, hopeful" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="needs"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>I need some help with...</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., motivation, feeling understood" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Bot className="mr-2 h-4 w-4" />
                )}
                Generate
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
      
      <div className="flex items-center justify-center p-6 bg-primary/10 border-2 border-dashed border-primary/20 rounded-xl min-h-[300px] lg:min-h-0">
        {isLoading ? (
          <div className="flex flex-col items-center gap-2 text-foreground">
            <Loader2 className="h-8 w-8 animate-spin" />
            <p>Creating something special for you...</p>
          </div>
        ) : encouragement ? (
          <blockquote className="text-center">
            <Sparkles className="h-8 w-8 mx-auto text-primary mb-4" />
            <p className="text-xl font-headline italic text-foreground/90">
              "{encouragement}"
            </p>
          </blockquote>
        ) : (
          <div className="text-center text-muted-foreground">
            <Sparkles className="h-8 w-8 mx-auto mb-4" />
            <p>Your personalized encouragement will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
