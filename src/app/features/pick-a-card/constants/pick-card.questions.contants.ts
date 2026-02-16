export type cardGameQuestion = {
  category: 'all' | 'player' | 'playerOrGroup' | 'cardPicker';
  prompt: string;
};

export const cardDrinkingGamePrompts: cardGameQuestion[] = [
  { category: 'all', prompt: 'Everyone who is wearing a watch drinks' },
  { category: 'all', prompt: 'Everyone who is wearing glasses drinks' },
  {
    category: 'all',
    prompt: 'Everyone who checked their phone in the last 5 minutes drinks',
  },
  { category: 'all', prompt: 'Everyone wearing black drinks' },
  { category: 'all', prompt: 'Everyone wearing slippers or sandals drinks' },
  { category: 'all', prompt: 'Everyone who arrived late drinks' },
  { category: 'all', prompt: 'Everyone who drove here drinks water instead' },
  { category: 'all', prompt: 'Everyone who lives nearby drinks' },
  { category: 'all', prompt: 'Everyone who traveled the farthest drinks' },
  { category: 'all', prompt: 'Everyone who is wearing a belt drinks' },

  { category: 'player', prompt: 'The person who picked this card drinks' },
  { category: 'player', prompt: 'The person to your left drinks' },
  { category: 'player', prompt: 'The person to your right drinks' },
  { category: 'player', prompt: 'Pick someone to drink with you' },
  { category: 'player', prompt: 'Pick someone to drink twice' },
  { category: 'all', prompt: 'Everyone except you drinks' },
  { category: 'player', prompt: 'You drink for every sibling you have' },
  { category: 'player', prompt: 'You drink if you’re the youngest here' },
  { category: 'player', prompt: 'You drink if you’re the oldest here' },
  { category: 'player', prompt: 'You drink if you’re single' },
  {
    category: 'player',
    prompt: 'Compliment the person across from you or drink',
  },
  { category: 'player', prompt: 'Say something nice about the host or drink' },
  { category: 'player', prompt: 'Thank the person on your right or drink' },
  { category: 'player', prompt: 'Tell a fun fact about yourself or drink' },
  { category: 'player', prompt: 'Share an embarrassing story or drink' },
  { category: 'player', prompt: 'Say your favorite food out loud or drink' },
  { category: 'player', prompt: 'Say your favorite drink or drink' },
  { category: 'player', prompt: 'Say your favorite movie or drink' },
  { category: 'player', prompt: 'Say your favorite song or drink' },
  { category: 'player', prompt: 'Say your favorite place or drink' },
  { category: 'all', prompt: 'Drink if you’ve skipped a workout this week' },
  { category: 'all', prompt: 'Drink if you’ve lied today' },
  { category: 'all', prompt: 'Drink if you’ve ghosted someone' },
  { category: 'all', prompt: 'Drink if you’ve stayed up past 3 AM this week' },
  {
    category: 'all',
    prompt: 'Drink if you’ve ordered food delivery this week',
  },
  {
    category: 'all',
    prompt: 'Drink if you’ve watched a show you didn’t finish',
  },
  { category: 'all', prompt: 'Drink if you’ve been late to work or school' },
  { category: 'all', prompt: 'Drink if you’ve pretended to be busy' },
  { category: 'all', prompt: 'Drink if you’ve stalked someone online' },
  { category: 'all', prompt: 'Drink if you’ve reread old messages' },
  { category: 'all', prompt: 'Last person to touch the table drinks' },
  { category: 'all', prompt: 'Last person to raise their hand drinks' },
  { category: 'all', prompt: 'Last person to stand up drinks' },
  { category: 'all', prompt: 'Last person to smile drinks' },
  { category: 'all', prompt: 'Last person to say the host’s name drinks' },
  { category: 'all', prompt: 'Everyone drinks one sip' },
  { category: 'all', prompt: 'Everyone drinks two sips' },
  { category: 'all', prompt: 'Everyone drinks except the card picker' },
  { category: 'all', prompt: 'Everyone drinks if the picker drinks' },
  { category: 'all', prompt: 'Everyone drinks if the picker refuses' },
  {
    category: 'player',
    prompt: 'Make eye contact with someone for 5 seconds or drink',
  },
  { category: 'player', prompt: 'Speak in an accent for one round or drink' },
  { category: 'player', prompt: 'Stand up and spin once or drink' },
  { category: 'player', prompt: 'Do a small dance move or drink' },
  { category: 'player', prompt: 'Clap three times or drink' },
  { category: 'player', prompt: 'Send a thumbs-up emoji to someone or drink' },
  { category: 'player', prompt: 'Post a harmless story or drink' },
  { category: 'player', prompt: 'Switch seats with someone or drink' },
  { category: 'player', prompt: 'High-five two people or drink' },
  { category: 'player', prompt: 'Smile until your next turn or drink' },
  {
    category: 'playerOrGroup',
    prompt: 'Drink if you’ve played a drinking game before',
  },
  { category: 'playerOrGroup', prompt: 'Drink if you’ve been tipsy in public' },
  {
    category: 'playerOrGroup',
    prompt: 'Drink if you’ve laughed so hard you cried',
  },
  {
    category: 'playerOrGroup',
    prompt: 'Drink if you’ve lost your phone before',
  },
  {
    category: 'playerOrGroup',
    prompt: 'Drink if you’ve forgotten someone’s name',
  },
  {
    category: 'playerOrGroup',
    prompt: 'Drink if you’ve fallen asleep somewhere random',
  },
  {
    category: 'playerOrGroup',
    prompt: 'Drink if you’ve eaten something off the floor',
  },
  {
    category: 'playerOrGroup',
    prompt: 'Drink if you’ve sent a message to the wrong person',
  },
  {
    category: 'playerOrGroup',
    prompt: 'Drink if you’ve pretended to know something',
  },
  { category: 'playerOrGroup', prompt: 'Drink if you’re having fun right now' },
  { category: 'all', prompt: 'Everyone wearing glasses drinks' },
  { category: 'cardPicker', prompt: 'The card picker drinks' },
  { category: 'all', prompt: 'Everyone with a birthday this month drinks' },
  {
    category: 'player',
    prompt: 'Compliment the person to your right or drink',
  },
  { category: 'all', prompt: 'Everyone wearing blue drinks' },
  {
    category: 'playerOrGroup',
    prompt: "Take a shot if you've been on a roller coaster",
  },
  { category: 'player', prompt: 'Tell a secret or take a drink' },
  { category: 'all', prompt: 'Everyone who has a pet drinks' },
  { category: 'cardPicker', prompt: 'The card picker takes 2 sips' },
  { category: 'all', prompt: 'Everyone who has been abroad drinks' },
  { category: 'playerOrGroup', prompt: 'Dance for 5 seconds or drink' },
  { category: 'all', prompt: 'Everyone who has siblings drinks' },
  {
    category: 'playerOrGroup',
    prompt: 'Share your last embarrassing moment or drink',
  },
  { category: 'all', prompt: 'Everyone who likes pineapple on pizza drinks' },
  { category: 'player', prompt: 'The person on your left drinks' },
  { category: 'player', prompt: 'Imitate a celebrity or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has seen a scary movie recently drinks',
  },
  { category: 'player', prompt: 'Tell a joke or drink' },
  { category: 'all', prompt: 'Everyone wearing socks drinks' },
  { category: 'all', prompt: 'Take a sip if you’ve ever gone camping' },
  { category: 'all', prompt: 'Everyone who knows a magic trick drinks' },
  { category: 'player', prompt: 'Sing the first line of a song or drink' },
  { category: 'cardPicker', prompt: 'The card picker drinks twice' },
  { category: 'all', prompt: 'Everyone who has been to a concert drinks' },
  { category: 'player', prompt: 'Swap a seat with someone or drink' },
  { category: 'all', prompt: 'Everyone who has a tattoo drinks' },
  { category: 'player', prompt: 'Do 5 jumping jacks or drink' },
  { category: 'all', prompt: 'Everyone who has used a dating app drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to drink',
  },
  { category: 'all', prompt: 'Everyone who can whistle drinks' },
  { category: 'player', prompt: 'Tell a lie convincingly or drink' },
  { category: 'all', prompt: 'Everyone who has broken a bone drinks' },
  { category: 'all', prompt: 'The person with the longest hair drinks' },
  {
    category: 'all',
    prompt: 'Everyone who speaks more than one language drinks',
  },
  { category: 'player', prompt: 'Make a funny face or drink' },
  { category: 'all', prompt: 'Everyone wearing rings drinks' },
  { category: 'player', prompt: 'Share a guilty pleasure or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has played a board game this week drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks and chooses someone else to drink',
  },
  { category: 'all', prompt: 'Everyone who has stayed awake all night drinks' },
  { category: 'player', prompt: 'Give a toast or take a drink' },
  { category: 'all', prompt: 'Everyone who likes coffee drinks' },
  {
    category: 'player',
    prompt: 'Pretend to be an animal for 5 seconds or drink',
  },
  { category: 'all', prompt: 'Everyone who has eaten sushi drinks' },
  { category: 'all', prompt: 'The person who arrived last drinks' },
  { category: 'all', prompt: 'Everyone who has a nickname drinks' },
  { category: 'all', prompt: 'Say a tongue twister or drink' },
  { category: 'all', prompt: 'Everyone who has sung karaoke drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to swap drinks with',
  },
  { category: 'all', prompt: 'Everyone who has traveled by plane drinks' },
  { category: 'player', prompt: 'Act like a pirate or drink' },
  { category: 'all', prompt: 'Everyone who owns a car drinks' },
  { category: 'all', prompt: 'The person wearing red drinks' },
  { category: 'all', prompt: 'Everyone who has binge-watched a series drinks' },
  { category: 'player', prompt: 'Tell a funny childhood story or drink' },
  { category: 'all', prompt: 'Everyone who has a social media account drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they laugh at their own joke',
  },
  { category: 'all', prompt: 'Everyone who likes chocolate drinks' },
  { category: 'player', prompt: 'Make a silly dance move or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has gone swimming this week drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to tell a joke or drink',
  },
  { category: 'all', prompt: 'Everyone who has played video games drinks' },
  { category: 'player', prompt: 'Act like a robot or drink' },
  { category: 'all', prompt: 'Everyone who has eaten dessert today drinks' },
  {
    category: 'cardPicker',
    prompt: "The card picker drinks for each 'yes' answer",
  },
  { category: 'all', prompt: 'Everyone who has been to a wedding drinks' },
  {
    category: 'player',
    prompt: 'Imitate your favorite cartoon character or drink',
  },
  { category: 'all', prompt: 'Everyone who likes spicy food drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to mimic an animal',
  },
  {
    category: 'all',
    prompt: 'Everyone who has tried a new hobby this month drinks',
  },
  {
    category: 'player',
    prompt: 'Sing a line from your favorite song or drink',
  },
  {
    category: 'all',
    prompt: 'Everyone who has stayed in pajamas all day drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they have a sweet tooth',
  },
  { category: 'all', prompt: 'Everyone who owns a pet drinks' },
  { category: 'player', prompt: 'Do 10 pushups or drink' },
  { category: 'all', prompt: 'Everyone who has a lucky charm drinks' },
  { category: 'all', prompt: 'The person with the shortest hair drinks' },
  { category: 'all', prompt: 'Everyone who has cooked today drinks' },
  { category: 'player', prompt: 'Share a random fact or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has seen a live performance drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks and chooses someone to drink',
  },
  { category: 'all', prompt: 'Everyone who has been to a beach drinks' },
  { category: 'player', prompt: 'Pretend to speak in an accent or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has tried a new food this week drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker picks someone to take 2 shots',
  },
  { category: 'all', prompt: 'Everyone who has met someone famous drinks' },
  { category: 'player', prompt: 'Make an animal sound or drink' },
  { category: 'all', prompt: 'Everyone who has read a book recently drinks' },
  { category: 'player', prompt: 'The person on your right drinks' },
  { category: 'all', prompt: 'Everyone who has played sports today drinks' },
  { category: 'player', prompt: 'Share a random compliment or drink' },
  { category: 'all', prompt: 'Everyone who likes pizza drinks' },
  { category: 'cardPicker', prompt: 'The card picker drinks if they smile' },
  { category: 'all', prompt: 'Everyone who has worn sunglasses today drinks' },
  { category: 'player', prompt: 'Act like a superhero or drink' },
  { category: 'all', prompt: 'Everyone who has taken a selfie today drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to tell a funny story',
  },
  { category: 'all', prompt: 'Everyone who has drunk coffee today drinks' },
  { category: 'player', prompt: 'Do a funny dance or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has been to a party this month drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they can touch their toes',
  },
  { category: 'all', prompt: 'Everyone who has seen a movie this week drinks' },
  { category: 'player', prompt: 'Make a silly face or drink' },
  { category: 'all', prompt: 'Everyone who has ever dyed their hair drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker picks someone to swap a sip with',
  },
  {
    category: 'all',
    prompt: 'Everyone who has stayed up past midnight drinks',
  },
  { category: 'player', prompt: 'Act like a celebrity or drink' },
  { category: 'all', prompt: 'Everyone who has ever lost their phone drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they have a sibling',
  },
  {
    category: 'all',
    prompt: 'Everyone who has been late to work or school drinks',
  },
  {
    category: 'player',
    prompt: 'Share your favorite embarrassing story or drink',
  },
  {
    category: 'all',
    prompt: 'Everyone who has watched a horror movie alone drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to do a silly dance',
  },
  { category: 'all', prompt: 'Everyone who has ever been in a taxi drinks' },
  { category: 'player', prompt: 'Do a funny impression or drink' },
  { category: 'all', prompt: 'Everyone who has ever pulled a prank drinks' },
  { category: 'all', prompt: 'Everyone who has ever gone camping drinks' },
  { category: 'player', prompt: 'Show your best dance move or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever been on a road trip drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they have a pet',
  },
  {
    category: 'all',
    prompt: 'Everyone who has tried a new drink this month drinks',
  },
  { category: 'player', prompt: 'Say a joke or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever eaten fast food today drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to swap seats',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever been to a theme park drinks',
  },
  {
    category: 'player',
    prompt: 'Imitate your favorite movie character or drink',
  },
  { category: 'all', prompt: 'Everyone who has stayed up past 2 AM drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks twice if they laughed',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever skipped class or work drinks',
  },
  { category: 'player', prompt: 'Tell a funny story about school or drink' },
  { category: 'all', prompt: 'Everyone who has ever been on a plane drinks' },
  { category: 'player', prompt: 'Do a tongue twister or drink' },
  { category: 'all', prompt: 'Everyone who has ever met a celebrity drinks' },
  { category: 'cardPicker', prompt: 'The card picker drinks if wearing socks' },
  {
    category: 'all',
    prompt: 'Everyone who has ever sung in a public place drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever gotten a speeding ticket drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to compliment',
  },
  { category: 'all', prompt: 'Everyone who has ever failed a test drinks' },
  {
    category: 'all',
    prompt: 'Everyone who has ever dyed their hair a crazy color drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they have a pet',
  },
  { category: 'all', prompt: 'Everyone who has ever been on a cruise drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they own a bike',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever eaten something spicy drinks',
  },
  { category: 'player', prompt: 'Pretend to be an animal or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever had a crush on a coworker drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks and chooses someone to take a sip',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever forgotten an important date drinks',
  },
  { category: 'player', prompt: 'Tell a secret or drink' },
  { category: 'all', prompt: 'Everyone who has ever been to a wedding drinks' },
  { category: 'all', prompt: 'Everyone who has ever made a TikTok drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to tell a joke',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever lied about their age drinks',
  },
  { category: 'player', prompt: 'Do 10 squats or drink' },
  { category: 'all', prompt: 'Everyone who has ever been to a beach drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if wearing a watch',
  },
  { category: 'all', prompt: 'Everyone who has ever sent a risky text drinks' },
  { category: 'player', prompt: 'Sing a line from a song or drink' },
  { category: 'all', prompt: 'Everyone who has ever baked something drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to do a silly challenge',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever played spin the bottle drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever forgotten someone’s birthday drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever been in a car accident drinks',
  },
  { category: 'player', prompt: 'Share your worst date story or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever gone skinny dipping drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to swap drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever stayed out past midnight drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever binge-watched a series drinks',
  },
  { category: 'player', prompt: 'Do your best impression or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever flirted with a stranger drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever sent a text by accident drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever gotten caught sneaking out drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to act like an animal',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever done karaoke sober drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever forgotten where they parked drinks',
  },
  { category: 'cardPicker', prompt: 'The card picker drinks if wearing blue' },
  {
    category: 'all',
    prompt: 'Everyone who has ever pulled an all-nighter drinks',
  },
  {
    category: 'player',
    prompt: 'Tell a funny story about work or school or drink',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever tried a new hobby this month drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they laughed in the last minute',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever played truth or dare drinks',
  },
  { category: 'player', prompt: 'Do a silly dance or drink' },
  { category: 'all', prompt: 'Everyone who has ever worn a costume drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to sing a line from a song',
  },
  { category: 'all', prompt: 'Everyone who has ever cheated in a game drinks' },
  {
    category: 'player',
    prompt: 'Share your favorite childhood memory or drink',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever eaten dessert before dinner drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they have a tattoo',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever played a board game drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever laughed so hard they cried drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever been kicked out of a bar drinks',
  },
  { category: 'all', prompt: 'Everyone who has ever pranked someone drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if wearing glasses',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever forgotten to do homework/drinks',
  },
  { category: 'player', prompt: 'Tell a funny joke or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever been on a blind date drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they have ever lied about their age',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever sent a flirty DM by accident drinks',
  },
  { category: 'player', prompt: 'Do a funny dance move or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever gotten a haircut they regretted drinks',
  },
  { category: 'all', prompt: 'Everyone who has ever ghosted someone drinks' },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to tell a secret',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever forgotten an important event drinks',
  },
  { category: 'player', prompt: 'Share a funny story from school or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever been on a road trip without planning drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever kissed someone on a dare drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever flirted with a coworker drinks',
  },
  {
    category: 'all',
    prompt:
      'Everyone who has ever broken something and blamed someone else drinks',
  },
  { category: 'all', prompt: 'Share an embarrassing moment or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever played a drinking card game drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they have a tattoo or piercing',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever snuck into a movie drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever lied to get out of work drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to do 5 jumping jacks',
  },
  { category: 'all', prompt: 'Everyone who has ever danced in public drinks' },
  {
    category: 'all',
    prompt: 'Everyone who has ever had a wardrobe malfunction drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever sent a risky photo drinks',
  },
  { category: 'all', prompt: 'Everyone who has ever crashed a party drinks' },
  {
    category: 'all',
    prompt: 'Everyone who has ever flirted to get free drinks drinks',
  },
  {
    category: 'cardPicker',
    prompt:
      'The card picker drinks if they have ever dyed their hair a crazy color',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever pretended to know a celebrity drinks',
  },
  { category: 'player', prompt: 'Share a random fun fact or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever stayed in pajamas all day drinks',
  },
  {
    category: 'all',
    prompt:
      'Everyone who has ever kissed more than one person in a night drinks',
  },
  { category: 'player', prompt: 'Act like an animal or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever gotten lost in a city drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they own a pet',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever lied on a dating app drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever made a fake social media account drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever been skydiving or bungee jumping drinks',
  },
  { category: 'cardPicker', prompt: 'The card picker drinks if wearing red' },
  { category: 'all', prompt: 'Everyone who has ever crashed a wedding drinks' },
  { category: 'all', prompt: 'Share a secret or drink' },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to mimic a celebrity',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever sent a text to the wrong person drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever flirted on social media drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever played a drinking game drinks',
  },
  { category: 'player', prompt: 'Do 5 pushups or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever stayed out past 3 AM drinks',
  },
  { category: 'all', prompt: 'Everyone who has ever danced on a table drinks' },
  {
    category: 'all',
    prompt: 'Everyone who has ever sent a risky text by accident drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever been kicked out of a club drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever eaten something off the floor drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever pretended to like a gift drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if wearing a necklace',
  },
  { category: 'all', prompt: 'Everyone who has ever lied to a friend drinks' },
  {
    category: 'all',
    prompt: 'Everyone who has ever cried during a movie drinks',
  },
  {
    category: 'all',
    prompt: "Everyone who has ever had a crush on a friend's sibling drinks",
  },
  { category: 'player', prompt: 'Do 10 jumping jacks or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever flopped a group project drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever stayed up all night partying drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to dance for 5 seconds',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever lied to get out of a meeting drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they have ever sent a text by mistake',
  },
  { category: 'player', prompt: 'Do a silly dance for 5 seconds or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever forgotten an anniversary drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to tell a funny joke',
  },
  {
    category: 'all',
    prompt:
      'Everyone who has ever flirted with a stranger on social media drinks',
  },
  {
    category: 'all',
    prompt: 'Act like your favorite movie character or drink',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever pulled a prank on a friend drinks',
  },
  { category: 'all', prompt: 'Sing the chorus of your favorite song or drink' },
  {
    category: 'cardPicker',
    prompt: 'The card picker chooses someone to do 10 squats',
  },
  {
    category: 'player',
    prompt: 'Do your best impression of a celebrity or drink',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they are wearing a watch',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever been on a roller coaster drinks',
  },
  {
    category: 'player',
    prompt: 'Do a tongue twister without messing up or drink',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they are wearing glasses',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever had a crush on a friend’s sibling drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever been on a blind date drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever danced in the rain drinks',
  },
  { category: 'player', prompt: 'Pretend to speak in a silly accent or drink' },
  {
    category: 'all',
    prompt: 'Everyone who has ever flirted with a bartender drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever been kicked out of a party drinks',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever danced on a table or bar drinks',
  },
  {
    category: 'cardPicker',
    prompt: 'The card picker drinks if they smiled in the last minute',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever stayed awake all night drinks',
  },
  {
    category: 'player',
    prompt: 'Act like your favorite cartoon character or drink',
  },
  {
    category: 'all',
    prompt: 'Everyone who has ever flirted with a stranger drinks',
  },
];
