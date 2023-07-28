// Sample collection of quotes
const quotes = [
  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Life is what happens when you're busy making other plans. – John Lennon",
  "You miss 100% of the shots you don't take. – Wayne Gretzky",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. – Nelson Mandela",

  "Be yourself; everyone else is already taken. - Oscar Wilde",
  "The best revenge is massive success. - Frank Sinatra",
  "Don't cry because it's over, smile because it happened. - Dr. Seuss",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "You must be the change you wish to see in the world. - Mahatma Gandhi",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
  "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "Twenty years from now, you will be more disappointed by the things you didn't do than by the ones you did do. - Mark Twain",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "A journey of a thousand miles begins with a single step. - Lao Tzu",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
  "If you can't explain it simply, you don't understand it well enough. - Albert Einstein",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks. - Mark Zuckerberg",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
  "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
  "You become what you believe. - Oprah Winfrey",
  "The best way to predict the future is to create it. - Peter Drucker",
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "A person who never made a mistake never tried anything new. - Albert Einstein",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
  "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "If you can't explain it simply, you don't understand it well enough. - Albert Einstein",
  "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "A journey of a thousand miles begins with a single step. - Lao Tzu",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "I have not failed. I've just found 10,000 ways that won't work. - Thomas A. Edison",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
  "If you want to lift yourself up, lift up someone else. - Booker T. Washington",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
  "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. - Steve Jobs",
  "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
];

// Function to get a random quote from the collection
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

let quote = getRandomQuote();
console.log(quote);

// Export the getRandomQuote function so that other modules can use it
module.exports = getRandomQuote;
