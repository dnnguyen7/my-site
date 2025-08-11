
import React from 'react';
import {
    IconAddressBook, IconDollarSign, IconBrain, IconRocket,
    IconChevronsRight, IconYoutube, IconCalendar, IconQuoteLeft, IconStar, IconChevronRight, IconPhone,
    IconCommentDots, IconDiscord, IconFileLines, IconWandMagicSparkles, IconLightbulb, IconMicrophone,
    IconBoltLightning, IconHandshake, IconRoad, IconFaceSmile, IconCirclesOverlap, IconUserPlus,
    IconFilePdf, IconCircleQuestion, IconGlobe, IconCheck, IconCircle, IconWebhook, IconLink, IconEnvelope, IconToolbox,
    IconCodeMerge, IconBuilding, IconPlugCircleBolt,
    IconAutomateWorkflowsNew, IconAllInOneNew, IconNotJustAiAgentsNew, IconPowerfulIntegrationsNew, IconArrowsRotate, IconClock, IconWaveform, IconChartNetwork, IconNetworkWired, IconRightLeft, IconLocationDot
} from './components/Icons';
import { Page, NewsUpdate } from './types';

export const productLinks: { name: string; href: Page; description: string; icon: React.ReactNode }[] = [
    { name: 'AI Phone Agent', href: 'ai-phone-agent', description: 'Automate inbound and outbound calls.', icon: React.createElement(IconPhone) },
    { name: 'AI Chat Agent', href: 'ai-chat-agent', description: 'Engage customers on your website 24/7.', icon: React.createElement(IconCommentDots) },
    { name: 'AI Discord Bot', href: 'ai-discord-bot', description: 'Automate tasks and support in Discord.', icon: React.createElement(IconDiscord) },
];

export const resourceLinks: { name: string; href: Page; description: string; icon: React.ReactNode }[] = [
    { name: 'Blog', href: 'blog', description: 'Latest articles and insights.', icon: React.createElement(IconFileLines) },
    { name: 'Use Cases', href: 'use-cases', description: 'See how businesses use Recepti.', icon: React.createElement(IconToolbox) },
    { name: 'Demo Videos', href: 'demo-videos', description: 'Watch our platform in action.', icon: React.createElement(IconYoutube) },
    { name: 'Status', href: 'status', description: "See our AI's live operational status.", icon: React.createElement(IconWaveform) },
    { name: 'About Us', href: 'about', description: 'Learn about our mission and team.', icon: React.createElement(IconAddressBook) },
    { name: 'Help Center', href: 'help-center', description: 'Find answers to your questions.', icon: React.createElement(IconCircleQuestion) },
];

export const trustedByLogos: { src: string; alt: string; invert?: boolean }[] = [
    { src: 'https://echo.win/images/customers/bikes.webp', alt: 'Bikes Online' },
    { src: 'https://echo.win/images/customers/farmers.webp', alt: 'Farmers Insurance' },
    { src: 'https://echo.win/images/customers/niural.webp', alt: 'Niural' },
    { src: 'https://echo.win/images/customers/south_river.webp', alt: 'South River Restoration' },
    { src: 'https://echo.win/images/customers/jiffy.webp', alt: 'Jiffy Lube' },
    { src: 'https://echo.win/images/customers/bugaboo.webp', alt: 'Bugaboo Bookkeeping' },
    { src: 'https://echo.win/images/customers/hrt.webp', alt: 'HTX Urology' },
    { src: 'https://echo.win/images/customers/integrated.webp', alt: 'Integrated Computer Services' },
    { src: 'https://echo.win/images/customers/polarity.webp', alt: 'Polarity' },
    { src: 'https://echo.win/images/customers/south_law.webp', alt: 'Sky Law Firm' },
    { src: 'https://echo.win/images/customers/cloudstar.webp', alt: 'Cloudstar', invert: true },
    { src: 'https://echo.win/images/customers/gater.webp', alt: 'Greater Bay Protective Services' },
    { src: 'https://echo.win/images/customers/biznetz.webp', alt: 'BizNetz' },
];

export const blogPosts: { title: string; publishedDate: string; content: { type: 'p' | 'h3' | 'ul' | 'ol'; text?: string; items?: string[] }[] }[] = [
    {
      title: 'Why Local Businesses Are Switching to AI Receptionists (Fast)',
      publishedDate: 'September 14, 2024',
      content: [
        { type: 'p', text: 'Small businesses don’t have the luxury of wasting opportunities. Every phone call that rings out, every voicemail that goes unanswered, is a potential job, appointment, or long-term customer slipping through your fingers.' },
        { type: 'p', text: 'For decades, local businesses like HVAC services, med spas, roofing companies, and dental clinics relied on in-house staff or after-hours answering services to pick up the slack. But now? The smart ones are making the switch — and fast — to AI-powered receptionists.' },
        { type: 'h3', text: 'The Shift Is Happening Now' },
        { type: 'p', text: "AI receptionists have gone from novelty to necessity. These aren't clunky bots reading scripts. We're talking about advanced voice agents that understand natural language, respond instantly, handle objections, book appointments, and even answer business-specific questions — 24 hours a day." },
        { type: 'p', text: 'Imagine a roofing business that never misses a call again. A med spa where every lead is logged, qualified, and scheduled in your calendar automatically. A plumbing company that books emergency calls at 3 AM without needing anyone awake.' },
        { type: 'p', text: "That’s not the future. That’s today." },
        { type: 'h3', text: 'Why Human Receptionists Aren’t Enough' },
        { type: 'p', text: "Human receptionists are valuable — but they’re also limited. They take breaks. They go home. They sleep. And they cost thousands per month in salary, taxes, and benefits." },
        { type: 'p', text: 'Meanwhile, AI receptionists:' },
        { type: 'ul', items: [ 'Work 24/7 without breaks', 'Cost a fraction of a full-time salary', 'Never get distracted, tired, or frustrated', 'Scale instantly — handling multiple calls at once' ] },
        { type: 'p', text: "It's not about replacing humans — it’s about augmenting your team with technology that never sleeps." },
        { type: 'h3', text: 'It’s Not Just About Answering Calls' },
        { type: 'p', text: 'Most customers don’t leave voicemails. If no one answers, they hang up and call your competitor. With AI, that never happens. Every call is captured, every inquiry responded to, and every potential booking given a smooth, professional experience.' },
        { type: 'p', text: 'Some local businesses see booking rates increase by 30–50% simply because they’re no longer missing calls.' },
        { type: 'p', text: "If you're running a local business and you're still relying on voicemail or inconsistent staff coverage, you're not just behind — you're bleeding money." },
        { type: 'h3', text: 'The Bottom Line' },
        { type: 'p', text: 'In 2024, small businesses can no longer afford to lose leads due to something as basic as a missed phone call. AI receptionists offer a powerful, cost-effective solution — and those who adopt early are gaining an edge their competitors can’t match.' },
        { type: 'p', text: 'Don’t let old habits cost you new customers. It’s time to modernize your front desk.' }
      ]
    },
    {
        title: '5 Signs It’s Time to Replace Your Phone Answering Service',
        publishedDate: 'December 3, 2024',
        content: [
          { type: 'p', text: 'If you’re still using a traditional phone answering service, here’s a hard truth: it might be doing more harm than good.' },
          { type: 'p', text: 'The industry hasn\'t kept up with the times. And while it may have worked ten years ago, today’s customers expect fast, clear, and immediate responses — not “We’ll call you back during business hours.” That’s why so many businesses are moving away from outdated call centers and toward AI receptionist solutions.' },
          { type: 'p', text: 'Here are five clear signs your answering service needs to be replaced:' },
          { type: 'h3', text: '1. You’re Still Missing Leads' },
          { type: 'p', text: 'Just because someone picked up the phone doesn’t mean the lead was captured. If your answering service is just taking messages and asking callers to wait for a callback, that’s not solving the problem — it’s delaying it. In today’s on-demand world, customers move fast. If they don’t get what they need instantly, they’ll move on.' },
          { type: 'h3', text: '2. They Can’t Answer Real Questions' },
          { type: 'p', text: '“How much do you charge?” “Do you serve my area?” “Can I book for next Friday?” If your answering service isn’t trained to handle these basic, high-intent questions, you’re leaving money on the table. AI receptionists are custom-trained on your services, pricing, hours, and FAQs — so they sound like an actual team member, not just someone reading off a generic sheet.' },
          { type: 'h3', text: '3. No After-Hours Coverage? Huge Problem.' },
          { type: 'p', text: 'The majority of first-time customers reach out after work — nights, weekends, early mornings. If your phone goes unanswered during those hours, you’re invisible. An AI receptionist doesn’t clock out. It answers instantly 24/7 — turning late-night calls into booked appointments before you even wake up.' },
          { type: 'h3', text: '4. Your Customers Are Frustrated' },
          { type: 'p', text: 'Long wait times. Cold, robotic responses. Repeating themselves over and over. If you’re getting complaints (or if you’ve stopped asking because you’re afraid of the answer), your call service might be doing more damage than good.' },
          { type: 'h3', text: '5. You’re Overpaying for Old-School Support' },
          { type: 'p', text: 'Most answering services cost hundreds — if not thousands — per month. And for what? A limited team that can’t book, qualify, or convert. AI receptionists offer a better experience at a fraction of the price — and scale with your growth.' },
          { type: 'h3', text: 'The Smarter Alternative' },
          { type: 'p', text: 'AI voice agents don’t just answer calls. They qualify, schedule, follow scripts, send reminders, log transcripts, and never forget a detail.' },
          { type: 'p', text: 'It’s not just cheaper. It’s better.' },
          { type: 'p', text: 'It’s not just modern. It’s necessary.' },
        ]
    },
    {
        title: 'How AI Receptionists Boost Bookings Without Lifting a Finger',
        publishedDate: 'April 9, 2025',
        content: [
            { type: 'p', text: 'You might not realize it, but your business has a hidden leak — and it’s costing you real money. It’s not in your operations. It’s not in your marketing. It’s in your missed calls.' },
            { type: 'p', text: 'The average small business misses 20–30% of inbound calls — and over 80% of those callers won’t leave a voicemail or call back.' },
            { type: 'p', text: 'This is where AI receptionists become a game-changer.' },
            { type: 'h3', text: 'The Always-On Booking Engine' },
            { type: 'p', text: 'AI receptionists don’t just “answer the phone.” They handle the entire first interaction — like a seasoned sales rep. They:' },
            { type: 'ul', items: [ 'Pick up immediately', 'Greet the caller using your brand voice', 'Ask qualifying questions', 'Answer service-related inquiries', 'Book appointments directly in your calendar', 'Log the entire call with a transcript' ] },
            { type: 'p', text: 'It’s like hiring a 24/7 front desk that never calls in sick, never needs breaks, and never gets overwhelmed — even during high-volume call times.' },
            { type: 'h3', text: 'Why It Works' },
            { type: 'p', text: 'Speed and clarity win. When a customer calls a local business, they’re often calling two or three competitors at the same time. Whoever responds first (and best) gets the job.' },
            { type: 'p', text: 'An AI receptionist responds within seconds, provides helpful answers, and secures the booking — before your competitors even check voicemail.' },
            { type: 'h3', text: 'The Numbers Don’t Lie' },
            { type: 'p', text: 'Early adopters of AI receptionist tech are reporting serious performance boosts:' },
            { type: 'ul', items: [ '30–50% more appointments booked', '100% call response rate', 'Higher customer satisfaction and retention', 'Immediate follow-up with leads who hang up' ] },
            { type: 'p', text: 'And the best part? You don’t need to micromanage any of it.' },
            { type: 'h3', text: 'Real Business, Real Results' },
            { type: 'p', text: 'Whether you\'re a solo roofer or a 10-chair dental practice, AI receptionists adapt to your needs. They scale with you. And they integrate seamlessly with your existing systems.' },
            { type: 'p', text: 'That means no extra admin work. No more missed leads. Just booked jobs while you sleep.' },
        ]
    },
    {
        title: 'The Hidden Cost of Missed Calls (And How to Eliminate It)',
        publishedDate: 'June 22, 2025',
        content: [
            { type: 'p', text: 'Let’s do some simple math.' },
            { type: 'p', text: 'If your average job brings in $300–$1,000, and you miss 10 calls a week — how much are you losing?' },
            { type: 'p', text: 'That’s $3,000 to $10,000 in potential revenue, per week. Multiply that by a year, and you’re talking six figures. And most businesses don’t even realize it’s happening.' },
            { type: 'h3', text: 'Missed Calls = Missed Trust' },
            { type: 'p', text: 'When a customer calls and no one answers, they don’t leave a message. They don’t wait for a call back. They move on — usually to a competitor who picked up the phone. That’s not just lost money. That’s a lost opportunity to build a long-term relationship.' },
            { type: 'p', text: 'You paid for the lead. You ran the ad. You earned the interest. And then… you let the phone ring out. That’s the real cost.' },
            { type: 'h3', text: 'AI Stops the Leak Cold' },
            { type: 'p', text: 'AI receptionists catch every call. No matter what time it is, no matter how busy you are. Every inquiry gets a prompt, professional response. The AI can:' },
            { type: 'ul', items: [ 'Provide accurate service info', 'Check availability', 'Quote standard pricing', 'Schedule the job', 'And even upsell additional services' ] },
            { type: 'p', text: 'It’s like having a super-receptionist who’s never off-duty and never overwhelmed.' },
            { type: 'h3', text: 'Turn Lost Calls Into Booked Jobs' },
            { type: 'p', text: 'Businesses that adopt AI receptionists often find it’s not their marketing that’s broken — it’s their intake. Once calls are answered 100% of the time, conversion rates skyrocket.' },
            { type: 'p', text: 'If you’re spending money to make the phone ring, don’t let it go to voicemail.' },
        ]
    },
    {
        title: 'What Questions Should You Ask Before Hiring an AI Receptionist?',
        publishedDate: 'August 2, 2025',
        content: [
            { type: 'p', text: 'Not all AI receptionists are built the same. Some are glorified voicemail systems. Others are clunky, robotic, or hard to train. If you want to avoid the frustration and get it right the first time, ask these key questions before signing up.' },
            { type: 'h3', text: '1. Does it sound human enough for my customers?' },
            { type: 'p', text: 'Voice quality matters. The best AI agents use advanced natural language processing and tone modeling to sound like a real person — warm, clear, and friendly. Ask for a demo or voice sample before committing.' },
            { type: 'h3', text: '2. Can it book directly into my scheduling system?' },
            { type: 'p', text: 'If the AI can’t actually book jobs or appointments, it’s just a glorified call recorder. Make sure it integrates with your calendar (Google, Calendly, GoHighLevel, etc.).' },
            { type: 'h3', text: '3. Is it trained on my actual business info?' },
            { type: 'p', text: 'Generic scripts don’t cut it. The AI should understand your pricing, hours, service areas, specialties, FAQs, and more. It should feel like a true extension of your team.' },
            { type: 'h3', text: '4. What happens if the caller asks something complicated?' },
            { type: 'p', text: 'No AI is perfect. Ask how the system handles complex or unexpected questions. Does it escalate to a human? Send a voicemail with a transcript? Forward to your phone?' },
            { type: 'h3', text: '5. Can I change the script or voice tone later?' },
            { type: 'p', text: 'As your business evolves, so should your AI. Choose a platform that lets you easily update your call flow, responses, and even personality settings.' },
            { type: 'h3', text: '6. How secure is the data?' },
            { type: 'p', text: 'Call recordings, lead info, and customer details should all be protected. Make sure the provider uses secure, encrypted infrastructure — and complies with relevant data privacy laws.' },
            { type: 'h3', text: 'The Bottom Line' },
            { type: 'p', text: 'An AI receptionist is more than a tool — it’s the first impression of your business. Ask the right questions now, and you’ll set yourself up for smoother operations, more bookings, and happier customers down the line.' },
        ]
    }
];

export const exampleCallData = [
    {
      title: 'A plumbing call that turned into a $23,720 job',
      audioUrl: 'https://www.dropbox.com/scl/fi/kfrb4y6jgiy0e4dt5yyfc/23K-Revenue-Call.mp3.mp3?rlkey=24v3svb9oh2pd4tcs01xn6h29&st=veel2j3t&dl=1',
    },
    {
      title: 'After hours HVAC call that turned into a $17,464 job',
      audioUrl: 'https://www.dropbox.com/scl/fi/0oa21z7vyrot010kvwk5p/17k-Revenue-Call.mp3.mp3?rlkey=5w6gnc5qncck3d8y79bweqda2&st=j4fdr0eg&dl=1',
    },
    {
      title: 'Price Shopping Customer Ends up Getting Transferred',
      audioUrl: 'https://www.dropbox.com/scl/fi/3tolnhs5r5r3oo0x447xe/Price-Shopper-Call.mp3.mp3?rlkey=r5q2tc8we4mqln60chqf5rkau&st=79fnj640&dl=1',
    },
  ];

export const useCasesData = [
    {
      title: 'Greeting a new customer',
      description: 'Recepti greets a new customer with a friendly greeting',
      imageUrl: 'https://www.thetrainingcenterofairconditioningandheating.com/wp-content/uploads/2019/07/shutterstock_659528887.jpg',
      audioUrl: 'https://www.dropbox.com/scl/fi/8hnixbjc7blk03y8xhm9e/greeting.mp3?rlkey=4nb2ifyn14cs1v4r2uklwg3h6&st=ics4fo43&dl=1',
    },
    {
      title: 'Managing after-hours calls',
      description: 'Recepti takes an emergency service request after hours',
      imageUrl: 'https://www.patlive.com/wp-content/uploads/2019/05/3-Undeniable-Reasons-Your-Business-Needs-a-Live-Receptionist-Now.jpg',
      audioUrl: 'https://www.dropbox.com/scl/fi/hmf9vpre93j9wk2dhpy5f/managing.mp3?rlkey=o6vi87yjdfyfkyt5hvmf0pz1w&st=5eltgbhz&dl=1',
    },
    {
      title: 'Taking a service inquiry',
      description: 'Recepti handles a new customer service inquiry',
      imageUrl: 'https://www.timedoctor.com/blog/images/2021/03/call-center-services.jpg',
      audioUrl: 'https://www.dropbox.com/scl/fi/uzs5azogbl79xyrl8apgs/taking.mp3?rlkey=anh3xr33l7w8mljpjn1wj8uyl&st=7a1vlixa&dl=1',
    },
    {
      title: 'Answering FAQs',
      description: 'Recepti provides detailed information about services',
      imageUrl: 'https://acropolis-wp-content-uploads.s3.us-west-1.amazonaws.com/how-to-become-a-general-contractor-hero-2.webp',
      audioUrl: 'https://www.dropbox.com/scl/fi/2pwoueva1v65aq9r1izfn/answering.mp3?rlkey=acqoddhubanrdqc1dxb07383n&st=b87603b3&dl=1',
    }
  ];

export const productFeatures = [
    {
      title: { line1: 'Built For', highlight: 'Rapid Deployment' },
      description: 'Instruct, train, test and deploy AI agents to phone, chat and more in record time without compromising on capabilities and scalability. Built for busy contractors, one-man service teams, and local business owners who need results, not complexity.',
      visual: React.createElement('div', { className: 'rounded-xl border border-slate-200 bg-white/60 p-4 md:p-6 shadow-lg backdrop-blur-sm relative' },
        React.createElement('div', { className: 'absolute -top-3 left-4' },
          React.createElement('span', { className: 'bg-white border border-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700' }, 'Easy Setup')
        ),
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-4 gap-4 mt-10' },
          React.createElement('div', { className: 'rounded-lg bg-violet-50/50 p-4 h-full flex flex-col' },
            React.createElement('div', { className: 'flex items-center gap-2 mb-2' },
              React.createElement('div', { className: 'flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-white text-sm font-bold' }, '1'),
              React.createElement('p', { className: 'font-semibold text-base text-slate-800' }, 'Instructions')
            ),
            React.createElement('p', { className: 'text-sm text-slate-500 mb-4' }, 'Train like a human employee'),
            React.createElement('div', { className: 'mt-auto w-full rounded-lg bg-white p-3 border border-slate-200 space-y-2' },
              React.createElement('div', { className: 'h-2 w-full rounded-full bg-blue-200 opacity-80' }),
              React.createElement('div', { className: 'h-2 w-5/6 rounded-full bg-blue-200 opacity-80' }),
              React.createElement('div', { className: 'h-2 w-full rounded-full bg-blue-200 opacity-80' }),
              React.createElement('div', { className: 'h-2 w-3/4 rounded-full bg-blue-200 opacity-80' })
            )
          ),
          React.createElement('div', { className: 'rounded-lg bg-violet-50/50 p-4 h-full flex flex-col' },
            React.createElement('div', { className: 'flex items-center gap-2 mb-2' },
              React.createElement('div', { className: 'flex h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-white text-sm font-bold' }, '2'),
              React.createElement('p', { className: 'font-semibold text-base text-slate-800' }, 'Knowledge')
            ),
            React.createElement('p', { className: 'text-sm text-slate-500 mb-4' }, 'Connect websites, docs, and FAQs'),
            React.createElement('div', { className: 'mt-auto space-y-3 p-1' },
              React.createElement('div', { className: 'flex items-center gap-2' },
                React.createElement('div', { className: 'h-2.5 w-2.5 rounded-full bg-violet-400' }),
                React.createElement('div', { className: 'h-2 flex-1 rounded-full bg-slate-200' }, React.createElement('div', { className: 'h-full w-4/5 rounded-full bg-violet-300' }))
              ),
              React.createElement('div', { className: 'flex items-center gap-2' },
                React.createElement('div', { className: 'h-2.5 w-2.5 rounded-full bg-violet-400' }),
                React.createElement('div', { className: 'h-2 flex-1 rounded-full bg-slate-200' }, React.createElement('div', { className: 'h-full w-3/5 rounded-full bg-violet-300' }))
              ),
              React.createElement('div', { className: 'flex items-center gap-2' },
                React.createElement('div', { className: 'h-2.5 w-2.5 rounded-full bg-violet-400' }),
                React.createElement('div', { className: 'h-2 flex-1 rounded-full bg-slate-200' }, React.createElement('div', { className: 'h-full w-2/5 rounded-full bg-violet-300' }))
              )
            )
          ),
          React.createElement('div', { className: 'rounded-lg bg-violet-50/50 p-4 h-full flex flex-col' },
            React.createElement('div', { className: 'flex items-center gap-2 mb-2' },
              React.createElement('div', { className: 'flex h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-white text-sm font-bold' }, '3'),
              React.createElement('p', { className: 'font-semibold text-base text-slate-800' }, 'Testing')
            ),
            React.createElement('p', { className: 'text-sm text-slate-500 mb-4' }, 'Validate before deployment'),
            React.createElement('div', { className: 'mt-auto w-full space-y-3' },
              React.createElement('div', { className: 'rounded-md bg-white p-2 border border-slate-200 space-y-2' },
                React.createElement('div', { className: 'flex items-center gap-2' },
                  React.createElement('div', { className: 'h-2 w-2 rounded-full bg-green-400' }),
                  React.createElement('div', { className: 'h-1.5 flex-1 rounded-full bg-slate-200' }, React.createElement('div', { className: 'h-full w-3/4 rounded-full bg-green-300' }))
                ),
                React.createElement('div', { className: 'flex items-center gap-2' },
                  React.createElement('div', { className: 'h-2 w-2 rounded-full bg-violet-400' }),
                  React.createElement('div', { className: 'h-1.5 flex-1 rounded-full bg-slate-200' }, React.createElement('div', { className: 'h-full w-2/4 rounded-full bg-violet-300' }))
                )
              ),
              React.createElement('div', { className: 'rounded-md bg-white p-2 border border-slate-200 space-y-2' },
                React.createElement('div', { className: 'flex items-center gap-2' },
                  React.createElement('div', { className: 'h-2 w-2 rounded-full bg-blue-400' }),
                  React.createElement('div', { className: 'h-1.5 flex-1 rounded-full bg-slate-200' }, React.createElement('div', { className: 'h-full w-4/5 rounded-full bg-blue-300' }))
                ),
                React.createElement('div', { className: 'flex items-center gap-2' },
                  React.createElement('div', { className: 'h-2 w-2 rounded-full bg-orange-400' }),
                  React.createElement('div', { className: 'h-1.5 flex-1 rounded-full bg-slate-200' }, React.createElement('div', { className: 'h-full w-3/5 rounded-full bg-orange-300' }))
                )
              )
            )
          ),
          React.createElement('div', { className: 'rounded-lg bg-violet-50/50 p-4 h-full flex flex-col' },
            React.createElement('div', { className: 'flex items-center gap-2 mb-2' },
              React.createElement('div', { className: 'flex h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-white text-sm font-bold' }, '4'),
              React.createElement('p', { className: 'font-semibold text-base text-slate-800' }, 'Channels')
            ),
            React.createElement('p', { className: 'text-sm text-slate-500 mb-4' }, 'Deploy across platforms'),
            React.createElement('div', { className: 'mt-auto w-full flex flex-col justify-around' },
              React.createElement('div', { className: 'flex justify-around items-center' },
                React.createElement('div', { className: 'flex flex-col items-center gap-1' },
                  React.createElement('div', { className: 'flex h-8 w-8 items-center justify-center rounded-full bg-green-100' }, React.createElement(IconPhone, { className: 'h-4 w-4 text-green-500' })),
                  React.createElement('p', { className: 'text-xs text-slate-600' }, 'Phone')
                ),
                React.createElement('div', { className: 'flex flex-col items-center gap-1' },
                  React.createElement('div', { className: 'flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100' }, React.createElement(IconCommentDots, { className: 'h-4 w-4 text-yellow-600' })),
                  React.createElement('p', { className: 'text-xs text-slate-600' }, 'Chat')
                ),
                React.createElement('div', { className: 'flex flex-col items-center gap-1' },
                  React.createElement('div', { className: 'flex h-8 w-8 items-center justify-center rounded-full bg-blue-100' }, React.createElement(IconDiscord, { className: 'h-4 w-4 text-blue-500' })),
                  React.createElement('p', { className: 'text-xs text-slate-600' }, 'Discord')
                )
              ),
              React.createElement('div', { className: 'flex items-center mx-4 relative top-4' },
                React.createElement('div', { className: 'h-1.5 w-1.5 rounded-full bg-violet-500' }),
                React.createElement('div', { className: 'flex-1 h-px bg-violet-400' }),
                React.createElement('div', { className: 'h-1.5 w-1.5 rounded-full bg-violet-500' }),
                React.createElement('div', { className: 'flex-1 h-px bg-violet-400' }),
                React.createElement('div', { className: 'h-1.5 w-1.5 rounded-full bg-violet-500' })
              )
            )
          )
        ),
        React.createElement('div', { className: 'mt-8' },
          React.createElement('div', { className: 'flex justify-between text-sm text-slate-600 font-medium mb-2' },
            React.createElement('span', null, 'Setup Progress'),
            React.createElement('span', null, 'Ready to Deploy')
          ),
          React.createElement('div', { className: 'h-2 w-full rounded-full bg-slate-200' },
            React.createElement('div', { className: 'h-full w-full rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-violet-500' })
          )
        )
      )
    },
    {
      title: { line1: 'Simplified', highlight: 'Training Interface' },
      description: 'Skip the AI complexity. Train your agent in plain English like a human employee. It automatically learns from your website, documents, and FAQ.',
      visual: React.createElement('div', { className: 'rounded-xl border border-slate-200 bg-white/60 p-4 shadow-lg backdrop-blur-sm relative' },
        React.createElement('div', { className: 'absolute -top-3 left-4' },
          React.createElement('span', { className: 'bg-white border border-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-600' }, 'Training Editor')
        ),
        React.createElement('div', { className: 'flex gap-4 mt-6' },
          React.createElement('div', { className: 'flex-1 space-y-6 p-4 rounded-lg bg-white border border-slate-200' },
            React.createElement('div', {},
              React.createElement('div', { className: 'flex justify-between items-center mb-2' },
                React.createElement('div', { className: 'flex items-center gap-2' },
                  React.createElement('div', { className: 'w-2 h-2 rounded-full bg-blue-500' }),
                  React.createElement('p', { className: 'text-sm font-semibold text-slate-800' }, 'Instructions')
                ),
                React.createElement('p', { className: 'text-xs text-slate-400' }, 'Auto-saving...')
              ),
              React.createElement('div', { className: 'space-y-2 pl-4' },
                React.createElement('div', { className: 'h-2 rounded bg-slate-200/80' }),
                React.createElement('div', { className: 'h-2 rounded bg-slate-200/60 w-11/12' }),
                React.createElement('div', { className: 'h-2 rounded bg-slate-200/80 w-full' }),
                React.createElement('div', { className: 'h-2 rounded bg-slate-200/60 w-3/4' })
              )
            ),
            React.createElement('div', { className: 'border-t border-slate-200/80 my-4' }),
            React.createElement('div', {},
              React.createElement('div', { className: 'flex justify-between items-center' },
                React.createElement('div', { className: 'flex items-center gap-2' },
                  React.createElement('div', { className: 'w-2 h-2 rounded-full bg-green-500' }),
                  React.createElement('p', { className: 'text-sm font-semibold text-slate-800' }, 'Knowledge Base')
                ),
                React.createElement('p', { className: 'text-xs text-slate-500 font-medium' }, '3 sources')
              )
            )
          ),
          React.createElement('div', { className: 'flex flex-col gap-3 justify-center' },
            React.createElement('button', { type: 'button', className: 'w-24 text-sm font-semibold text-blue-700 bg-blue-100/70 border border-blue-200 rounded-lg px-4 py-2 text-center' }, 'Docs'),
            React.createElement('button', { type: 'button', className: 'w-24 text-sm font-semibold text-green-700 bg-green-100/70 border border-green-200 rounded-lg px-4 py-2 text-center' }, 'Website'),
            React.createElement('button', { type: 'button', className: 'w-24 text-sm font-semibold text-amber-700 bg-amber-100/70 border border-amber-200 rounded-lg px-4 py-2 text-center' }, 'FAQ')
          )
        )
      )
    },
    {
      title: { line1: 'Integrate With', highlight: 'Your Ecosystem' },
      description: 'Connect with 8000+ apps through Zapier or webhooks for Make.com, n8n, or custom backend. Your AI agent seamlessly integrates with your existing tools. Build powerful automations across phone, web, and Discord channels.',
      visual: React.createElement('div', { className: 'rounded-xl border border-slate-200 bg-white/60 p-4 shadow-lg backdrop-blur-sm relative' },
          React.createElement('div', { className: 'absolute -top-3 left-4' },
              React.createElement('span', { className: 'bg-white border border-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-600' }, 'Advanced Features')
          ),
          React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4 mt-8' },
              // Sentiment Analysis Card
              React.createElement('div', { className: 'rounded-xl bg-red-50/70 p-4 border border-red-200/80' },
                  React.createElement('div', { className: 'flex items-center gap-3 mb-3' },
                      React.createElement('div', { className: 'h-8 w-8 flex-shrink-0 rounded-lg flex items-center justify-center bg-red-100' },
                          React.createElement(IconFaceSmile, { className: 'h-5 w-5 text-red-600' })
                      ),
                      React.createElement('div', null,
                          React.createElement('h3', { className: 'font-bold text-red-700' }, 'Sentiment Analysis'),
                          React.createElement('p', { className: 'text-xs text-slate-500' }, 'Real-time emotion tracking')
                      )
                  ),
                  React.createElement('div', { className: 'space-y-3' },
                      React.createElement('div', { className: 'space-y-1' },
                          React.createElement('p', { className: 'text-sm text-slate-700' }, 'Positive'),
                          React.createElement('div', { className: 'h-2 w-full bg-green-100 rounded-full' },
                              React.createElement('div', { className: 'h-2 rounded-full bg-green-500', style: { width: '80%' } })
                          )
                      ),
                      React.createElement('div', { className: 'space-y-1' },
                          React.createElement('p', { className: 'text-sm text-slate-700' }, 'Neutral'),
                          React.createElement('div', { className: 'h-2 w-full bg-blue-100 rounded-full' },
                              React.createElement('div', { className: 'h-2 rounded-full bg-blue-500', style: { width: '50%' } })
                          )
                      ),
                      React.createElement('div', { className: 'space-y-1' },
                          React.createElement('p', { className: 'text-sm text-slate-700' }, 'Negative'),
                          React.createElement('div', { className: 'h-2 w-full bg-red-100 rounded-full' },
                              React.createElement('div', { className: 'h-2 rounded-full bg-red-500', style: { width: '15%' } })
                          )
                      )
                  )
              ),
              // Smart Calendar Card
              React.createElement('div', { className: 'rounded-xl bg-indigo-50/70 p-4 border border-indigo-200/80' },
                  React.createElement('div', { className: 'flex items-center gap-3 mb-3' },
                      React.createElement('div', { className: 'h-8 w-8 flex-shrink-0 rounded-lg flex items-center justify-center bg-indigo-100' },
                          React.createElement(IconCalendar, { className: 'h-5 w-5 text-indigo-600' })
                      ),
                      React.createElement('div', null,
                          React.createElement('h3', { className: 'font-bold text-indigo-700' }, 'Smart Calendar'),
                          React.createElement('p', { className: 'text-xs text-slate-500' }, 'Automated scheduling')
                      )
                  ),
                  React.createElement('div', null,
                      React.createElement('div', { className: 'grid grid-cols-7 gap-1 text-center text-xs text-slate-600 font-medium' },
                          ...['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(d => React.createElement('span', { key: d, className: 'text-slate-500' }, d)),
                          ...['15', '16'].map(d => React.createElement('span', { key: d, className: 'py-0.5' }, d)),
                          React.createElement('span', { key: '17', className: 'py-0.5 bg-indigo-200 border border-indigo-300 rounded-full' }, '17'),
                          ...['18', '19'].map(d => React.createElement('span', { key: d, className: 'py-0.5' }, d)),
                          React.createElement('span', { key: '20', className: 'py-0.5 bg-indigo-200 border border-indigo-300 rounded-full' }, '20'),
                          ...['21', '22', '23'].map(d => React.createElement('span', { key: d, className: 'py-0.5' }, d)),
                          React.createElement('span', { key: '24', className: 'py-0.5 bg-indigo-200 border border-indigo-300 rounded-full' }, '24'),
                          ...['25', '26', '27', '28'].map(d => React.createElement('span', { key: d, className: 'py-0.5' }, d))
                      ),
                      React.createElement('div', { className: 'mt-3 flex justify-between items-center rounded-lg bg-indigo-100 p-2 text-xs' },
                          React.createElement('span', { className: 'font-semibold text-indigo-800' }, 'Meeting with Client'),
                          React.createElement('span', { className: 'font-medium text-indigo-700' }, '2:30 PM')
                      )
                  )
              ),
              // Call Recording Card
              React.createElement('div', { className: 'rounded-xl bg-green-50/70 p-4 border border-green-200/80' },
                  React.createElement('div', { className: 'flex items-center gap-3 mb-3' },
                      React.createElement('div', { className: 'h-8 w-8 flex-shrink-0 rounded-lg flex items-center justify-center bg-green-100' },
                          React.createElement(IconPhone, { className: 'h-5 w-5 text-green-600' })
                      ),
                      React.createElement('div', null,
                          React.createElement('h3', { className: 'font-bold text-green-700' }, 'Call Recording'),
                          React.createElement('p', { className: 'text-xs text-slate-500' }, 'Voice transcription & playback')
                      )
                  ),
                  React.createElement('div', null,
                      React.createElement('div', { className: 'flex items-center justify-between text-xs mb-2' },
                          React.createElement('div', { className: 'flex items-center gap-1.5' },
                              React.createElement('div', { className: 'h-2 w-2 bg-green-500 rounded-full animate-pulse' }),
                              React.createElement('span', { className: 'font-medium text-slate-700' }, 'Recording')
                          ),
                          React.createElement('span', { className: 'font-mono text-slate-500' }, '2:15 / 3:00')
                      ),
                      React.createElement('div', { className: 'flex items-center h-10 gap-px' },
                          ...[4, 6, 3, 5, 8, 4, 7, 3, 5, 6, 3, 2, 4, 5, 7, 8, 6, 5, 4, 3, 5, 6, 8, 5, 4, 6, 3, 5, 8, 4, 7, 3, 5, 6, 3, 2, 4, 5, 7, 8, 6, 5, 4, 3, 5, 6].map((h, i) =>
                              React.createElement('div', { key: i, className: `w-0.5 rounded-full ${i === 20 ? 'bg-green-600' : 'bg-green-400/70'}`, style: { height: `${h * 10}%` } })
                          )
                      )
                  )
              ),
              // Call Summary Card
              React.createElement('div', { className: 'rounded-xl bg-violet-50/70 p-4 border border-violet-200/80' },
                  React.createElement('div', { className: 'flex items-center gap-3 mb-3' },
                      React.createElement('div', { className: 'h-8 w-8 flex-shrink-0 rounded-lg flex items-center justify-center bg-violet-100' },
                          React.createElement(IconFileLines, { className: 'h-5 w-5 text-violet-600' })
                      ),
                      React.createElement('div', null,
                          React.createElement('h3', { className: 'font-bold text-violet-700' }, 'Call Summary'),
                          React.createElement('p', { className: 'text-xs text-slate-500' }, 'AI-generated insights')
                      )
                  ),
                  React.createElement('div', null,
                      React.createElement('div', { className: 'space-y-3 mt-2' },
                          React.createElement('div', { className: 'flex items-center gap-2' },
                              React.createElement('div', { className: 'h-1.5 w-1.5 rounded-full bg-violet-500' }),
                              React.createElement('div', { className: 'h-1.5 flex-1 rounded-full bg-violet-200 w-full' })
                          ),
                          React.createElement('div', { className: 'flex items-center gap-2' },
                              React.createElement('div', { className: 'h-1.5 w-1.5 rounded-full bg-violet-500' }),
                              React.createElement('div', { className: 'h-1.5 flex-1 rounded-full bg-violet-200 w-4/5' })
                          ),
                          React.createElement('div', { className: 'flex items-center gap-2' },
                              React.createElement('div', { className: 'h-1.5 w-1.5 rounded-full bg-violet-500' }),
                              React.createElement('div', { className: 'h-1.5 flex-1 rounded-full bg-violet-200 w-full' })
                          )
                      ),
                      React.createElement('div', { className: 'flex justify-between items-center text-xs mt-4 text-slate-500' },
                          React.createElement('span', { className: 'font-medium' }, 'Key Points'),
                          React.createElement('span', { className: 'font-mono rounded-md bg-slate-100 px-1.5 py-0.5' }, '3 items')
                      )
                  )
              )
          )
      )
    },
    {
      title: { line1: 'Visibility', highlight: 'Around The Clock' },
      description: 'Get full visibility into the operations of your AI Voice Agents with live transcriptions, recordings, call summaries, sentiment analysis and more. Make intelligent informed decisions with data you can trust.',
      visual: React.createElement('div', { className: 'rounded-xl border border-slate-200 bg-white/50 p-6 shadow-lg backdrop-blur-sm' },
        React.createElement('p', { className: 'text-sm font-medium text-slate-500 mb-4' }, 'Live Monitoring'),
        React.createElement('div', { className: 'space-y-3' },
          React.createElement('div', { className: 'flex items-center justify-between rounded-lg bg-emerald-50 p-3 border border-emerald-200' },
            React.createElement('div', { className: 'flex items-center gap-2' },
              React.createElement('div', { className: 'h-2 w-2 rounded-full bg-green-500 animate-pulse' }),
              React.createElement('p', { className: 'text-sm font-medium text-slate-700' }, 'Support Call')
            ),
            React.createElement('span', { className: 'text-xs text-slate-500' }, '2m 30s')
          ),
          React.createElement('div', { className: 'flex items-center justify-between rounded-lg bg-amber-50 p-3 border border-amber-200' },
            React.createElement('div', { className: 'flex items-center gap-2' },
              React.createElement('div', { className: 'h-2 w-2 rounded-full bg-green-500 animate-pulse' }),
              React.createElement('p', { className: 'text-sm font-medium text-slate-700' }, 'Sales Inquiry')
            ),
            React.createElement('span', { className: 'text-xs text-slate-500' }, '8m 12s')
          ),
          React.createElement('div', { className: 'flex items-center justify-between rounded-lg bg-violet-50 p-3 border border-violet-200' },
            React.createElement('div', { className: 'flex items-center gap-2' },
              React.createElement('div', { className: 'h-2 w-2 rounded-full bg-green-500 animate-pulse' }),
              React.createElement('p', { className: 'font-medium text-sm text-slate-700' }, 'Onboarding')
            ),
            React.createElement('span', { className: 'text-xs text-slate-500' }, '1m 55s')
          )
        )
      )
    }
  ];

  export const enterpriseFeatures = [
    {
        icon: React.createElement(IconMicrophone, { className: "h-6 w-6" }),
        title: 'Live Transcripts',
        description: 'Real-time speech-to-text with exceptional accuracy.',
        iconBgClass: 'bg-gradient-to-br from-blue-500 to-indigo-500',
        cardBgClass: 'bg-blue-50',
        visual: React.createElement('div', { className: "p-3" }, React.createElement('div', { className: "flex flex-col gap-1.5" }, React.createElement('div', { className: "mb-3 flex items-center justify-between" }, React.createElement('div', { className: "text-xs font-medium text-slate-700" }, "Transcript"), React.createElement('div', { className: "flex items-center gap-1 text-xs text-slate-400" }, React.createElement('div', { className: "h-1 w-1 animate-pulse rounded-full bg-green-500" }), React.createElement('span', null, "Transcribing..."))), React.createElement('div', { className: "mb-2 flex items-start gap-2" }, React.createElement('div', { className: "mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-blue-100 text-center text-xs font-medium leading-5 text-blue-600" }, "AI"), React.createElement('div', { className: "flex-1" }, React.createElement('div', { className: "rounded-lg rounded-tl-none bg-blue-50 p-2 text-xs text-slate-700" }, "How can I help you today?"))), React.createElement('div', { className: "mb-2.5 flex items-start gap-2" }, React.createElement('div', { className: "mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-slate-100 text-center text-xs font-medium leading-5 text-slate-600" }, "U"), React.createElement('div', { className: "flex-1" }, React.createElement('div', { className: "rounded-lg rounded-tl-none bg-slate-50 p-2 text-xs text-slate-700" }, "Schedule a demo please.")))))
    },
    {
        icon: React.createElement(IconBoltLightning, { className: "h-6 w-6" }),
        title: 'Ultra-Low Latency',
        description: 'Rapid response times for natural conversation flow.',
        iconBgClass: 'bg-gradient-to-br from-amber-500 to-orange-500',
        cardBgClass: 'bg-amber-50',
        visual: React.createElement('div', { className: "p-3" }, React.createElement('div', { className: "mb-2 flex items-center justify-between" }, React.createElement('div', { className: "text-xs font-medium text-slate-700" }, "Response time"), React.createElement('div', { className: "rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-600" }, "Instant")), React.createElement('div', { className: "relative mb-3 mt-1 h-2 overflow-hidden rounded-full bg-slate-100" }, React.createElement('div', { className: "absolute left-0 h-full w-1/6 animate-pulse rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" })))
    },
    {
        icon: React.createElement(IconHandshake, { className: "h-6 w-6" }),
        title: 'Interruption Handling',
        description: 'Interruption handling during calls for seamless interactions.',
        iconBgClass: 'bg-gradient-to-br from-emerald-500 to-teal-500',
        cardBgClass: 'bg-emerald-50',
        visual: React.createElement('div', { className: "p-3" }, React.createElement('div', { className: "flex flex-col gap-1" }, React.createElement('div', { className: "flex items-center justify-between" }, React.createElement('div', { className: "text-xs text-slate-500" }, "Speaker activity"), React.createElement('div', { className: "text-xs font-medium text-green-600" }, "Smart switching")), React.createElement('div', { className: "flex h-6 items-center gap-1" }, React.createElement('div', { className: "h-2 w-2 rounded-full bg-blue-500" }), React.createElement('div', { className: "h-2 w-full overflow-hidden rounded-lg bg-slate-100" }, React.createElement('div', { className: "relative h-full w-[60%] rounded-lg bg-blue-200" })), React.createElement('span', { className: "w-6 text-[9px] text-slate-500" }, "AI")), React.createElement('div', { className: "flex h-6 items-center gap-1" }, React.createElement('div', { className: "h-2 w-2 rounded-full bg-green-500" }), React.createElement('div', { className: "h-2 w-full overflow-hidden rounded-lg bg-slate-100" }, React.createElement('div', { className: "relative h-full w-[30%] rounded-lg bg-green-200" })), React.createElement('span', { className: "w-6 text-[9px] text-slate-500" }, "User"))))
    },
    {
        icon: React.createElement(IconRoad, { className: "h-6 w-6" }),
        title: 'Parallel Calls',
        description: 'Process multiple calls simultaneously with no delay.',
        iconBgClass: 'bg-gradient-to-br from-violet-500 to-purple-500',
        cardBgClass: 'bg-violet-50',
        visual: React.createElement('div', { className: "p-3" }, React.createElement('div', { className: "text-xs text-slate-500" }, "Active calls"), React.createElement('div', { className: "flex flex-col gap-1.5" }, React.createElement('div', { className: "flex items-center gap-2" }, React.createElement('div', { className: "flex h-5 w-5 items-center justify-center rounded-full bg-purple-100 text-[10px] font-medium text-purple-600" }, "1"), React.createElement('div', { className: "relative flex-1" }, React.createElement('div', { className: "h-2 w-full overflow-hidden rounded-full bg-slate-100" }, React.createElement('div', { className: "h-full w-[65%] animate-pulse rounded-full bg-gradient-to-r from-purple-400 to-purple-500" })))), React.createElement('div', { className: "flex items-center gap-2" }, React.createElement('div', { className: "flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 text-[10px] font-medium text-violet-600" }, "2"), React.createElement('div', { className: "relative flex-1" }, React.createElement('div', { className: "h-2 w-full overflow-hidden rounded-full bg-slate-100" }, React.createElement('div', { className: "h-full w-[45%] animate-pulse rounded-full bg-gradient-to-r from-violet-400 to-violet-500" }))))))
    },
    {
        icon: React.createElement(IconToolbox, { className: "h-6 w-6" }),
        title: 'Tool Integration',
        description: 'Seamless connection with external tools and services.',
        iconBgClass: 'bg-gradient-to-br from-rose-500 to-pink-500',
        cardBgClass: 'bg-rose-50',
        visual: React.createElement('div', { className: "p-3" }, React.createElement('div', { className: "text-xs text-slate-500" }, "Tool Integration"), React.createElement('div', { className: "flex items-center justify-between mt-2" }, React.createElement('div', { className: "flex flex-col items-center" }, React.createElement('div', { className: "mb-1 flex h-6 w-6 items-center justify-center rounded-md bg-green-100" }, React.createElement(IconWebhook, { className: "h-3.5 w-3.5 text-green-600" })), React.createElement('span', { className: "text-[9px] text-slate-500" }, "API")), React.createElement('div', { className: "flex flex-col items-center" }, React.createElement('div', { className: "mb-1 flex h-6 w-6 items-center justify-center rounded-md bg-orange-100" }, React.createElement(IconLink, { className: "h-3.5 w-3.5 text-orange-600" })), React.createElement('span', { className: "text-[9px] text-slate-500" }, "Zapier")), React.createElement('div', { className: "flex flex-col items-center" }, React.createElement('div', { className: "mb-1 flex h-6 w-6 items-center justify-center rounded-md bg-blue-100" }, React.createElement(IconEnvelope, { className: "h-3.5 w-3.5 text-blue-600" })), React.createElement('span', { className: "text-[9px] text-slate-500" }, "Email"))))
    },
     {
        icon: React.createElement(IconFaceSmile, { className: "h-6 w-6" }),
        title: 'Sentiment Analysis',
        description: 'Monitor caller emotions and satisfaction in real-time.',
        iconBgClass: 'bg-gradient-to-br from-cyan-500 to-blue-500',
        cardBgClass: 'bg-cyan-50',
        visual: React.createElement('div', { className: "p-3" }, React.createElement('div', { className: "text-xs text-slate-500" }, "Sentiment Analysis"), React.createElement('div', { className: "mb-1.5 flex items-center gap-3 mt-2" }, React.createElement('div', { className: "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-green-400 text-center" }, React.createElement('span', { className: "text-lg font-bold text-green-500" }, "9.0")), React.createElement('div', { className: "flex flex-col" }, React.createElement('div', { className: "text-xs font-medium text-slate-700" }, "Caller Sentiment"), React.createElement('div', { className: "text-[10px] text-slate-500" }, "Agent rating"))))
    },
     {
        icon: React.createElement(IconCirclesOverlap, { className: "h-6 w-6" }),
        title: 'Agentic AI',
        description: 'Autonomous intelligent agents for complex task handling.',
        iconBgClass: 'bg-gradient-to-br from-indigo-500 to-blue-500',
        cardBgClass: 'bg-indigo-50',
        visual: React.createElement('div', { className: "p-2.5" }, React.createElement('div', { className: "text-xs text-slate-500" }, "Agentic AI"), React.createElement('div', { className: "flex flex-col gap-1.5 leading-none mt-2" }, React.createElement('div', { className: "flex items-center gap-1.5" }, React.createElement('div', { className: "flex h-2.5 w-2.5 items-center justify-center rounded-full bg-indigo-200" }, React.createElement('div', { className: "h-1 w-1 rounded-full bg-indigo-500" })), React.createElement('div', { className: "text-xs text-slate-600" }, "Analyzing request"), React.createElement('div', { className: "ml-auto" }, React.createElement(IconCheck, { className: "h-3 w-3 text-green-500" }))), React.createElement('div', { className: "flex items-center gap-1.5" }, React.createElement('div', { className: "flex h-2.5 w-2.5 items-center justify-center rounded-full bg-indigo-200" }, React.createElement('div', { className: "h-1 w-1 rounded-full bg-indigo-500" })), React.createElement('div', { className: "text-xs text-slate-600" }, "Executing tasks"), React.createElement('div', { className: "ml-auto" }, React.createElement(IconCircle, { className: "h-2.5 w-2.5 animate-pulse text-blue-500" })))))
    },
     {
        icon: React.createElement(IconUserPlus, { className: "h-6 w-6" }),
        title: 'Automatic Leads',
        description: 'Instant contact creation and data enrichment with our CRM.',
        iconBgClass: 'bg-gradient-to-br from-amber-500 to-pink-500',
        cardBgClass: 'bg-amber-50',
        visual: React.createElement('div', { className: "p-3" }, React.createElement('div', { className: "text-xs text-slate-500" }, "Automatic Leads"), React.createElement('div', { className: "flex items-center gap-2 mt-2" }, React.createElement('div', { className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-pink-600 text-xs font-medium text-white" }, "JD"), React.createElement('div', { className: "flex-1" }, React.createElement('div', { className: "flex items-center gap-1" }, React.createElement('div', { className: "text-sm font-medium text-slate-700" }, "John Doe"), React.createElement('span', { className: "inline-flex items-center rounded-full bg-green-100 px-1.5 py-0.5 text-[0.65rem] font-medium text-green-700" }, "New Lead")))))
    }
  ];

export const extraFeatures = [
    {
      icon: React.createElement(IconAutomateWorkflowsNew, { className: "h-7 w-7 text-white" }),
      title: 'Automate Workflows',
      description: "No two businesses are the same. That's why we've built a platform that allows you to customize it to fit your business needs, instead of the other way around.",
      iconBgClass: 'bg-gradient-to-br from-indigo-500 to-blue-600',
    },
    {
      icon: React.createElement(IconAllInOneNew, { className: "h-7 w-7 text-white" }),
      title: 'All In One',
      description: 'Get everything in one platform - from phone numbers to training and analytics. Launch your AI solution in minutes with our easy process.',
      iconBgClass: 'bg-gradient-to-br from-purple-500 to-violet-600',
    },
    {
      icon: React.createElement(IconNotJustAiAgentsNew, { className: "h-7 w-7 text-white" }),
      title: 'Not Just AI Agents',
      description: 'Get a complete business phone system with built-in CRM, analytics, integrations, and more that integrates directly with your AI voice agents.',
      iconBgClass: 'bg-gradient-to-br from-cyan-500 to-teal-500',
    },
    {
      icon: React.createElement(IconPowerfulIntegrationsNew, { className: "h-7 w-7 text-white" }),
      title: 'Powerful Integrations',
      description: 'Connect to 7000+ tools via Zapier, webhooks and APIs. Easily automate workflows just by typing instructions and enable your agent to take actions during conversations.',
      iconBgClass: 'bg-gradient-to-br from-emerald-500 to-green-500',
    },
  ];

  export const howItWorksSteps = [
    {
      title: 'Write Instructions',
      description: "Simply type instructions in plain English, just like you would train a human employee. No coding or technical knowledge required.",
      icon: React.createElement(IconFileLines),
      iconBgClass: 'bg-gradient-to-r from-blue-500 to-indigo-500',
      highlightClass: 'text-blue-600',
      visual: React.createElement('div', { className: "flex flex-col space-y-4" },
          React.createElement('div', { className: "flex justify-between border-b border-slate-100 pb-2" }, React.createElement('span', { className: "inline-flex items-center rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700" }, "Natural Language Editor")),
          React.createElement('div', { className: "rounded-lg bg-slate-50 p-3" }, 
              React.createElement('p', { className: "mb-2 text-xs font-medium text-slate-700" }, "Instructions:"), 
              React.createElement('div', { className: "space-y-1.5 text-xs text-slate-600" },
                  React.createElement('div', { className: "flex items-start gap-2" },
                      React.createElement('div', { className: "mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" }),
                      React.createElement('p', null, "You are a friendly AI receptionist for 'Mike\'s Plumbing'.")
                  ),
                  React.createElement('div', { className: "flex items-start gap-2" },
                      React.createElement('div', { className: "mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" }),
                      React.createElement('p', null, "Your goal is to answer calls, provide business hours, and book appointments.")
                  )
              )
          )
      )
    },
    {
        title: 'Add Tools',
        description: "Enable powerful capabilities with one click. Add email, SMS, calendar scheduling, and CRM integration to supercharge your AI agent.",
        icon: React.createElement(IconWandMagicSparkles),
        iconBgClass: 'bg-gradient-to-r from-purple-500 to-pink-500',
        highlightClass: 'text-purple-600',
        visual: React.createElement('div', { className: "grid grid-cols-2 gap-3" }, 
            React.createElement('div', { className: "cursor-pointer rounded-lg border border-purple-200 bg-purple-50 p-3" }, React.createElement('div', { className: "flex items-center justify-between" }, React.createElement('div', { className: "flex items-center gap-2" }, React.createElement(IconEnvelope, { className: "h-4 w-4 text-purple-600" }), React.createElement('span', { className: "text-xs font-medium text-purple-700" }, "Email")), React.createElement('div', { className: "h-2 w-2 rounded-full bg-green-500" }))), 
            React.createElement('div', { className: "cursor-pointer rounded-lg border border-pink-200 bg-pink-50 p-3" }, React.createElement('div', { className: "flex items-center justify-between" }, React.createElement('div', { className: "flex items-center gap-2" }, React.createElement(IconCommentDots, { className: "h-4 w-4 text-pink-600" }), React.createElement('span', { className: "text-xs font-medium text-pink-700" }, "SMS")), React.createElement('div', { className: "h-2 w-2 rounded-full bg-green-500" }))), 
            React.createElement('div', { className: "cursor-pointer rounded-lg border border-purple-200 bg-purple-50 p-3" }, React.createElement('div', { className: "flex items-center justify-between" }, React.createElement('div', { className: "flex items-center gap-2" }, React.createElement(IconCalendar, { className: "h-4 w-4 text-purple-600" }), React.createElement('span', { className: "text-xs font-medium text-purple-700" }, "Calendar")), React.createElement('div', { className: "h-2 w-2 rounded-full bg-slate-300" }))),
            React.createElement('div', { className: "cursor-pointer rounded-lg border border-pink-200 bg-pink-50 p-3" }, React.createElement('div', { className: "flex items-center justify-between" }, React.createElement('div', { className: "flex items-center gap-2" }, React.createElement(IconAddressBook, { className: "h-4 w-4 text-pink-600" }), React.createElement('span', { className: "text-xs font-medium text-pink-700" }, "CRM")), React.createElement('div', { className: "h-2 w-2 rounded-full bg-slate-300" })))
        )
    },
    {
        title: 'Import Knowledge',
        description: "Your AI automatically learns from your website, documents, and FAQs. Just point it to your resources and it becomes an expert on your business.",
        icon: React.createElement(IconLightbulb),
        iconBgClass: 'bg-gradient-to-r from-amber-500 to-orange-500',
        highlightClass: 'text-amber-600',
        visual: React.createElement('div', { className: "space-y-3" }, React.createElement('div', { className: "rounded-lg border border-amber-200 bg-amber-50 p-3" }, React.createElement('div', { className: "mb-2 flex items-center justify-between" }, React.createElement('div', { className: "flex items-center gap-2" }, React.createElement(IconGlobe, { className: "h-4 w-4 text-amber-600" }), React.createElement('span', { className: "text-xs font-medium text-amber-700" }, "Website")), React.createElement('span', { className: "text-[10px] text-amber-600" }, "Auto-crawling")), React.createElement('div', { className: "space-y-1" }, React.createElement('div', { className: "h-1.5 w-full rounded-full bg-amber-100" }, React.createElement('div', { className: "h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 w-full" })), React.createElement('p', { className: "text-[10px] text-amber-600" }, "12 pages indexed"))), React.createElement('div', { className: "rounded-lg border border-orange-200 bg-orange-50 p-3" }, React.createElement('div', { className: "mb-2 flex items-center justify-between" }, React.createElement('div', { className: "flex items-center gap-2" }, React.createElement(IconFilePdf, { className: "h-4 w-4 text-orange-600" }), React.createElement('span', { className: "text-xs font-medium text-orange-700" }, "Documents")), React.createElement('span', { className: "text-[10px] text-orange-600" }, "3 files"))))
    },
    {
        title: 'Deploy Instantly',
        description: "Go live in minutes across multiple channels. Your AI agent is ready to handle phone calls, web chats, and Discord conversations immediately.",
        icon: React.createElement(IconRocket),
        iconBgClass: 'bg-gradient-to-r from-emerald-500 to-teal-500',
        highlightClass: 'text-emerald-600',
        visual: React.createElement('div', { className: "grid grid-cols-3 gap-3" }, React.createElement('div', { className: "rounded-lg bg-gradient-to-b from-emerald-50 to-emerald-100 p-3 text-center" }, React.createElement('div', { className: "mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white" }, React.createElement(IconPhone, { className: "h-4 w-4" })), React.createElement('p', { className: "text-xs font-medium text-emerald-700" }, "Phone")), React.createElement('div', { className: "rounded-lg bg-gradient-to-b from-teal-50 to-teal-100 p-3 text-center" }, React.createElement('div', { className: "mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-teal-500 text-white" }, React.createElement(IconCommentDots, { className: "h-4 w-4" })), React.createElement('p', { className: "text-xs font-medium text-teal-700" }, "Chat")), React.createElement('div', { className: "rounded-lg bg-gradient-to-b from-emerald-50 to-emerald-100 p-3 text-center" }, React.createElement('div', { className: "mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-white" }, React.createElement(IconDiscord, { className: "h-4 w-4" })), React.createElement('p', { className: "text-xs font-medium text-emerald-700" }, "Discord")))
    }
  ];

export const testimonials = [
  {
    quote: "We've seen a 5X increase in customer appointments with AI-powered phone agents.",
    name: 'Sean Porcher',
    title: 'Jiffy Lube',
    avatarUrl: 'https://img.noln.net/files/base/ebm/noln/image/2023/01/1673024151423-sean_porcher1.png?auto=format,compress&fit=crop&w=200&h=200',
    rating: 5,
  },
  {
    quote: "Recepti's AI has revolutionized our customer service. It handles appointment scheduling and common inquiries with human-like precision, freeing up our dispatchers for more complex jobs. A game-changer for our HVAC business.",
    name: 'Brandon Anderson',
    title: 'Morris-Jenkins',
    avatarUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    rating: 5,
  },
  {
    quote: "The ability to handle thousands of calls simultaneously without compromising quality is simply incredible. Our operational efficiency has skyrocketed.",
    name: 'Jason Walton',
    title: 'Moxie Pest Control',
    avatarUrl: 'https://www.basinnow.com/wp-content/uploads/2024/06/jason-walton.png',
    rating: 5,
  },
  {
    quote: "Our customer response time has decreased by 90% thanks to Recepti. It's an indispensable tool for our team.",
    name: 'Sarah Jennings',
    title: 'Stark Industries',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    rating: 5,
  },
  {
    quote: "The integration with our CRM was seamless, and the automatic lead capture has saved us countless hours of manual data entry. Highly recommend!",
    name: 'Michael Chen',
    title: 'Global Tech Inc.',
    avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    rating: 5,
  },
  {
    quote: "I was skeptical about AI agents, but Recepti has exceeded all my expectations. The voice is natural, and it handles interruptions perfectly.",
    name: 'Emily Rodriguez',
    title: 'Sunrise Real Estate',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80',
    rating: 5,
  },
  {
    quote: "As a small business owner, I can't afford a full-time receptionist. Recepti gives me enterprise-level capabilities at a price I can afford. It's been a game changer.",
    name: 'David Lee',
    title: 'Lee\'s Landscaping',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    rating: 5,
  },
  {
    quote: "The analytics and live transcripts are incredibly useful for quality control and training. We've been able to improve our customer interactions based on the data.",
    name: 'Jessica Williams',
    title: 'Acme Solutions',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    rating: 5,
  }
];

export const faqItems = [
    { q: "How is an AI receptionist different from a human receptionist?", a: "An AI receptionist offers 24/7 availability, instant response times, and consistent performance — without sick days, missed calls, or overhead costs. While human receptionists are limited by work hours and fatigue, our AI handles every call, books appointments, answers FAQs, and even follows custom scripts based on your business needs — all for a fraction of the cost." },
    { q: "Will customers know they’re speaking with an AI?", a: "Not unless you want them to. Our AI voice sounds incredibly natural and human-like — with personalized responses, clear tone, and empathy cues. Most callers assume they're speaking to a live person. You also have full control over the AI’s personality and how it introduces itself to fit your brand." },
    { q: "Can the AI book appointments directly into my calendar?", a: "Yes. We integrate directly with tools like Google Calendar, Calendly, or your CRM to automatically schedule appointments, consultations, or service calls. No manual input needed — the AI confirms the booking with your customer and sends you real-time notifications." },
    { q: "What if someone calls with a complex question the AI can’t answer?", a: "When a call falls outside the AI’s scope, it immediately escalates to a human — either by forwarding the call, sending a voicemail, or emailing the transcript with caller details. You’ll never lose a lead, and every interaction is logged for full transparency." },
    { q: "How do I train the AI to understand my specific business?", a: "We handle setup and customization for you. During onboarding, we gather key details like your services, pricing, availability, service area, FAQs, and how you want the AI to talk. You’ll also be able to review and tweak the script anytime — it’s built to sound like it works for you, not just like a generic bot." },
    { q: "Is my customer data secure with your AI?", a: "Absolutely. We use encrypted systems and secure cloud infrastructure to ensure all call data and personal information is protected. Your customers’ privacy and your business reputation are our top priorities — and we’re fully compliant with relevant data privacy laws." }
];

export const detailedTestimonials = [
    {
      quote: "As a solo HVAC tech, I was losing at least 5-10 calls a day while on jobs. Since setting up Recepti, my booking rate has genuinely doubled. The AI handles scheduling and basic questions flawlessly, so I can focus on the work. It's the best employee I've ever had.",
      name: "Marcus Cole",
      company: "Cole's Climate Control",
      location: "Austin, TX",
    },
    {
      quote: "We run a 24/7 plumbing service, and our after-hours calls were a mess. Recepti has been a game-changer. It intelligently identifies emergencies, routes them to our on-call tech, and books the non-urgent jobs for the next day. Our night-time lead capture has increased by over 300%.",
      name: "Sarah Jenkins",
      company: "Flow-Right Plumbing",
      location: "Phoenix, AZ",
    },
    {
      quote: "I was skeptical about an AI answering my calls, but the voice sounds incredibly human. Customers don't even realize it's not a person. It answers questions about our roofing materials and warranties, and schedules estimates right into our calendar. Absolutely essential for any contractor.",
      name: "David Chen",
      company: "Apex Roofing Solutions",
      location: "Denver, CO",
    },
    {
      quote: "The best part about Recepti is how it frees up my time. I used to spend an hour every evening returning voicemails. Now, I just review the call summaries and see the new jobs already on my schedule. It’s saved me at least 10 hours a week in admin work.",
      name: "Jessica Martinez",
      company: "Spark Electrical Services",
      location: "Miami, FL",
    },
    {
      quote: "Our marketing agency recommended Recepti to ensure we weren't wasting ad spend on missed calls. The results were immediate. We're now converting leads that used to go straight to voicemail. The ROI is undeniable.",
      name: "Tom Alvarez",
      company: "GreenLeaf Landscaping",
      location: "San Diego, CA",
    },
    {
      quote: "The setup was surprisingly simple. I just gave it my website URL, and it learned about all our pest control packages. It can now answer detailed questions about treatments and pricing. It's smarter and more reliable than any answering service we've used.",
      name: "Emily Rodriguez",
      company: "Guardian Pest Control",
      location: "Atlanta, GA",
    },
    {
        quote: "This is a must-have for any small business. We run a small cleaning company and Recepti manages all our inbound leads and scheduling. It has allowed us to scale without hiring a full-time office manager. Worth every penny.",
        name: 'Carlos Rivera',
        company: "Maid in Heaven Cleaning",
        location: 'Chicago, IL',
    },
    {
        quote: "The ability for the AI to handle multiple calls at once during our peak season is incredible. We no longer put customers on hold or lose them to competitors. Our customer satisfaction has gone way up.",
        name: 'Brian Thompson',
        company: 'Thompson & Sons Painting',
        location: 'Seattle, WA'
    },
    {
      quote: "As a small installations company, every call counts. Recepti has become our competitive edge, ensuring we capture every lead, 24/7. The professionalism of the AI gives our customers confidence from the very first interaction. It’s an essential tool for any serious contractor.",
      name: 'Umar Cassim',
      company: "Huraco Installations",
      location: 'Dallas, TX',
    }
  ];

  export const successStories = [
    {
      quote: "We captured a $15,000 roof replacement job from an after-hours call that would have otherwise gone to voicemail. Recepti paid for itself for years in a single night.",
      name: 'Kevin O’Malley',
      company: 'K.O. Roofing',
      location: 'Boston, MA',
    },
    {
      quote: "Our call volume tripled after a storm. Recepti handled it all without a single missed call, booking dozens of emergency tree removal jobs while our crews were already in the field.",
      name: 'Angela Yu',
      company: 'ArborPro Tree Services',
      location: 'Houston, TX',
    },
    {
      quote: "The AI is so good at qualifying leads that our closing rate on scheduled appointments has gone from 50% to over 80%. We're only spending time on serious customers.",
      name: 'Frank Miller',
      company: 'Miller & Son General Contractors',
      location: 'Philadelphia, PA',
    },
    {
      quote: "I was losing business to competitors who answered the phone faster. Recepti solved that instantly. My schedule has never been this full.",
      name: 'Daniel Smith',
      company: 'Smitty’s Garage Doors',
      location: 'Las Vegas, NV',
    },
    {
      quote: "The call transcripts are a goldmine. I've learned so much about what my customers are asking for and used that info to improve my website and marketing.",
      name: 'Samantha Lee',
      company: 'Crystal Clear Window Cleaning',
      location: 'Orlando, FL',
    },
    {
      quote: "As a law firm owner, it is difficult to manage the volume of calls we receive daily. Recepti provides fast and personal responses to each of our clients. This maintains a healthy attorney client relationship. At the same time, it increases our efficiency when dealing with important calls.",
      name: 'Elliott Lipinsky',
      company: 'Law Offices Of Elliott Owen Lipinsky',
      location: 'Selma and Montgomery, Alabama',
    },
  ];

  export const techPartners: { name: string; logoUrl: string; invert?: boolean }[] = [
    { name: 'OpenAI', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg', invert: false },
    { name: 'Google Cloud', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png', invert: false },
    { name: 'Microsoft', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg', invert: false },
    { name: 'Cloudflare', logoUrl: 'https://echo.win/images/partners/cloudflare.webp', invert: false },
    { name: 'Telnyx', logoUrl: 'https://go.telnyx.com/rs/028-JJW-728/images/TelnyxNewLogo_Black.png', invert: false },
    { name: 'Deepgram', logoUrl: 'https://www.vonage.com/content/dam/vonage/us-en/partners/logos/showcase/Deepgram-wordmark-black.png', invert: false },
  ];
  
  export const featuredAt: { name: string; logoUrl: string; sizingClass?: string }[] = [
    { name: 'AWS re:Invent', logoUrl: 'https://mms.businesswire.com/media/20221101005314/en/1619632/5/ASW_logo.jpg?download=1' },
    { name: 'Austin Startup Week', logoUrl: 'https://cdn.prod.website-files.com/63ca0686daa24284bf57a7db/66c52403d4faeaab160d8012_8a7dd702-bf04-4206-97f3-922e5c611d33.png' },
    { name: 'TGND', logoUrl: 'https://echo.win/images/partners/tgnd.webp' },
    { name: 'SF Tech Week', logoUrl: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/no/de53f4bf-4e88-4a9d-aaaa-57e179d13501' },
    { name: 'Austin Tech Week', logoUrl: 'https://echo.win/images/partners/atw.webp' },
    { name: 'South By Southwest', logoUrl: 'https://www.d-id.com/wp-content/uploads/2023/03/news-logo-sxsw.png', sizingClass: 'max-h-24' },
  ];

export const contactAndCustomerManagement = [
    {
      icon: '📈',
      title: 'Customer Stage Tracking',
      description: "Doesn't matter if it's your sales pipeline or pizza delivery status, stage tracking in Recepti has you covered.",
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '📋',
      title: 'Kanban Boards',
      description: 'Visualize your customer journey with multiple Kanban boards. Track the status of your customers or their interactions with your business.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '📇',
      title: 'Built In CRM',
      description: 'Manage your contacts and their details, along with notes, lead stage tracking etc. Your agent can magically update your CRM based on the call.',
      tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
      icon: '🧑‍🤝‍🧑',
      title: 'Multi Team Management',
      description: 'Manage multiple teams and their scenarios from a single account. Invite your team members.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '👥',
      title: 'Contact Management',
      description: 'Built in contact management to keep track of your callers and their details.',
      tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
      icon: '✨',
      title: 'Magic Contacts',
      description: 'Never miss an important contact. Recepti auto-adds new callers to your contacts, complete with caller ID and details.',
      tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
      icon: '🚫',
      title: 'Blocked Numbers',
      description: 'Block unwanted callers from reaching you. Recepti will automatically block known spam callers.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '📝',
      title: 'Custom CRM Fields',
      description: 'Tailor your CRM to your specific needs with custom fields. Create, edit, and manage custom attributes for contacts, allowing you to track industry-specific or unique data points effortlessly.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    }
];

export const callHandlingAndIntegration = [
    {
        icon: '🔢',
        title: 'Digit-Triggered Actions',
        description: 'Instruct your agent to perform specific actions when callers press certain digits, such as transferring to support or changing languages.',
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
        icon: '📋',
        title: 'Post-Call Actions',
        description: 'Instruct your agent to perform specific tasks after the conversation or phone call has ended, enhancing follow-up processes.',
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
        icon: '🧹',
        title: 'Call Cleaner',
        description: 'Smart call monitoring system that detects calls that were made to waste your time (robocalls, silent calls that do not hang up etc.) and automatically ends them.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '🔁',
        title: 'Smart Transfers',
        description: 'Enhanced transfer logic with Safe Transfers option and ability to chain transfers. If one transfer fails, automatically route to another number. 50% reduced pricing for transferred calls.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '📅',
        title: 'Google Calendar Integration',
        description: 'Handle end to end scheduling with Google Calendar integration. Let your callers book appointments with you.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '🗓️',
        title: 'Outlook Calendar Integration',
        description: 'Seamlessly integrate with Microsoft Outlook Calendar for comprehensive appointment scheduling. Enable your AI agents to manage bookings directly through Outlook.',
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
        icon: '✍️',
        title: 'Wix Bookings Integration',
        description: 'Connect with Wix Bookings to manage appointments and scheduling. Perfect for businesses using Wix as their primary platform for customer bookings.',
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
        icon: '💬',
        title: 'Text Messages',
        description: 'Send your callers important information like website links, addresses, scheduling links etc via text messages dynamically.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '📞',
        title: 'Phone Number',
        description: 'Choose a new number, port your existing one, or forward your calls to us. Regardless of your carrier, we ensure a seamless setup.',
    },
    {
        icon: '⇉',
        title: 'Parallel Calls',
        description: 'Eliminate hold times with our capability to handle multiple simultaneous calls, amplifying customer satisfaction.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '🪝',
        title: 'Webhook Integration',
        description: 'Send and receive data from your Recepti system to your other systems using webhooks.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '🔗',
        title: '7000+ App Integrations',
        description: 'Integrate with your favorite apps and services with Zapier to automate your workflows and boost productivity.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    }
];

export const analyticsAndInsights = [
    {
        icon: '⏺️',
        title: 'Call Recording',
        description: 'Your calls are automatically recorded and stored in your account. You can download them, play them back and use them for analytics and training.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '🚩',
        title: 'Call Scoring & Flagging',
        description: 'AI automatically scores each call and our new automated call analysis engine flags calls with issues for review. Improved sentiment detection now considers tone, pace, and other voice factors.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '😊',
        title: 'Sentiment Analysis',
        description: "Our emotion and sentiment detection system will provide you information on your caller's state. Understand how your callers are feeling and improve your customer experience.",
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '🔔',
        title: 'Usage Alerts',
        description: 'Receive a usage alert email when your agent consumes the specified threshold minutes.',
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
        icon: '💡',
        title: 'Actionable Insights',
        description: "Have actionable insights like 'Your callers were mostly interested in product X this week' delivered directly to your inbox. Find patterns and improve your business.",
        tag: { text: 'Beta', className: 'bg-sky-500 text-white' }
    },
    {
        icon: '📝',
        title: 'Call Summaries',
        description: 'Get key insights and summary of your calls after they are completed. Use this to monitor your calls, train your agent and improve your customer experience.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '📋',
        title: 'Call Logs',
        description: "Get detailed logs of your calls, including the caller's phone number, duration, and more.",
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '📊',
        title: 'Call Analytics',
        description: 'Gain valuable insights into your call data with our analytics dashboard. Understand your callers better and make informed decisions.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '🔴',
        title: 'Live Transcripts',
        description: 'Get real time transcripts of your calls as they happen. Use this to monitor your calls, train your agent and improve your customer experience.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '↪️',
        title: 'Transfer Transcripts',
        description: 'Get the transcript of the transferred portion of the call. Use this to gather insights from the transferred call.',
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
        icon: '📧',
        title: 'Emailed Insights',
        description: "Get transcripts and summaries emailed with training suggestions included. These actionable tips help you improve your agent based on each call's performance.",
        tag: { text: 'Beta', className: 'bg-sky-500 text-white' }
    }
];

export const voiceAndAudio = [
    {
        icon: '🔄',
        title: 'Interruption Handling',
        description: 'Our improved speech pipeline handles interruptions even better, preventing agents from cutting off callers. Experience more natural, human-like conversations with seamless topic changes and interjections.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '🏷️',
        title: 'Named Entity Detection',
        description: 'Our novel technology ensures your AI agent accurately understands rare and hard to pronounce names of businesses or callers.',
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
        icon: '🌐',
        title: 'Omni Language Engine',
        description: 'Our new language engine allowing your callers to speak in any language and your agent to respond in any language.',
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
        icon: '🔊',
        title: 'HD Audio',
        description: 'Your callers will hear high definition crystal clear audio, thanks to our HD audio support. Only available on select carriers.',
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
        icon: '🔑',
        title: 'Key Phrases',
        description: 'Teach your agent to listen for specific keywords and respond accordingly. Great for understanding proprietary names, unique keywords and uncommon abbreviations.',
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
        icon: '🗣️',
        title: 'Voice Selection',
        description: 'Choose from 35+ human-like voices including 10+ new enhanced voices. Our redesigned voice picker provides detailed information about voice styles and response speeds to help you make the perfect choice.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '🏃',
        title: 'Voice Speed',
        description: "Adjust the speed of your agent's voice to match your brand's identity and enhance your customer's call experience.",
        tag: { text: 'New', className: 'bg-red-500 text-white' }
    }
];

export const infrastructureAndScalability = [
    {
        icon: '🏗️',
        title: 'Scalable Infrastructure',
        description: 'Enhanced infrastructure with new Tangerine speech engine. Auto-scales to handle even more simultaneous calls with improved performance and reliability across the platform.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '☁️',
        title: 'Self Serve Cloud Platform',
        description: 'Our self serve platform lets you scale your business without any intervention from us. You can get up and running in minutes.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
        icon: '⏰',
        title: 'Always Available',
        description: 'With our 24/7 answering service, be assured that your customers are always heard, and never missed.',
        tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    }
];

export const aiEngineAndCapabilitiesList = [
    {
      icon: '⚡️',
      title: 'Speedy Engine',
      description: 'Our Speedy model is now out of beta, offering 10-40% faster responses with ultra-low latency (<750ms). Switch between Speedy and Brainy models based on your needs for optimal performance.',
      tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
      icon: '🤖',
      title: 'Agentic AI',
      description: 'Our AI agents can autonomously plan complex steps, call external tools, and take multiple actions to perform complex operations, enhancing their problem-solving capabilities and overall effectiveness.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '🌐',
      title: 'Multi-Platform Integration',
      description: 'Deploy your AI Agents across various platforms seamlessly. From web chatbot to phone calls to Discord channels, ensure your AI workforce maintains a consistent presence.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '🧠',
      title: 'State of the Art AI',
      description: 'Our Orchestra V3 AI engine blends and orchestrates the latest and greatest large language models, ensuring your AI agents are always up to date and performant.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '📞',
      title: 'Outbound Campaigns',
      description: 'Empower your AI Agents to initiate conversations and phone calls for you. Create campaigns, schedule them and let your AI agents handle the rest.',
      tag: { text: 'Beta', className: 'bg-sky-500 text-white' }
    },
    {
      icon: '📚',
      title: 'Dhyan Knowledge Engine',
      description: 'Our proprietary knowledge retrieval system allows your AI Agents to access and utilize information accurately, ensuring they provide the most relevant and up-to-date responses.',
      tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
      icon: '🗣️',
      title: 'Natural Language Understanding',
      description: 'Leverage state of the art models to understand and communicate in natural language, facilitating seamless interactions with human team members.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '🔄',
      title: 'Switch Agent',
      description: 'Enable your AI agent to seamlessly switch to another agent as needed, based on specific scenarios or instructions.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '🌍',
      title: 'Multi-Language Support',
      description: 'Choose from over 30 languages for your agent, with the ability to set a default language and switch on demand during conversations.',
      tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
      icon: '🛠️',
      title: 'Tool Integration',
      description: 'Empower your AI agents with the ability to use various tools like sending emails, texts, or triggering Zapier actions, enhancing their capability to perform complex tasks autonomously.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    }
];

export const trainingAndManagementList = [
    {
      icon: '🩺',
      title: 'Agent Doctor',
      description: 'Get a comprehensive health check of your agent with personalized insights. Agent Doctor analyzes your instructions, tools, and configuration to suggest optimizations for maximum performance.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '🔌',
      title: 'API Access',
      description: 'Integrate AI Agents into your existing systems and workflows with our comprehensive API, allowing for custom implementations and extended functionality.',
      tag: { text: 'Early Access', className: 'bg-green-500 text-white' }
    },
    {
      icon: '✨',
      title: 'Magic Instructions',
      description: 'With just minimal instructions, our cutting-edge AI engine automatically creates optimized prompts tailored to handle real-world challenges. Streamline your AI workflows with the click of a button!',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '🌐',
      title: 'Knowledge Integration',
      description: "Train your AI Agents using your company's website. Ensure they have up-to-date information about your organization's structure, products, and services.",
    },
    {
      icon: '📄',
      title: 'Document-Based Learning',
      description: "Enhance your AI Agents' knowledge by uploading relevant documents, allowing them to learn from your company's policies, procedures, and best practices.",
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '🧪',
      title: 'Testing Environment',
      description: 'Test your AI receptionist using a test phone number without purchasing one. Voice chat mode now available in the portal for quick testing and tweaking.',
      tag: { text: 'Upgraded', className: 'bg-purple-500 text-white' }
    },
    {
      icon: '🏷️',
      title: 'White Label Platform',
      description: 'Launch your own AI phone answering service with our white label platform. First phase registrations are open with limited seats available.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '🔍',
      title: 'Universal Search',
      description: 'Quickly find anything across your account with our new fuzzy search feature. Access it instantly with CTRL+K or CMD+K for seamless navigation.',
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    },
    {
      icon: '🧭',
      title: 'Number Compass',
      description: "AI-powered phone number discovery that helps you find the perfect number for your brand. Your number is your business identity - make it memorable.",
      tag: { text: 'New', className: 'bg-red-500 text-white' }
    }
];

export const languages: { name: string, flagUrl: string }[] = [
    { name: 'English', flagUrl: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png' },
    { name: 'Mandarin', flagUrl: 'https://www.countryflags.com/wp-content/uploads/china-flag-png-large.png' },
    { name: 'Hindi', flagUrl: 'https://cdn.countryflags.com/thumbs/india/flag-400.png' },
    { name: 'Spanish', flagUrl: 'https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png' },
    { name: 'French', flagUrl: 'https://www.countryflags.com/wp-content/uploads/france-flag-png-large.png' },
    { name: 'Arabic', flagUrl: 'https://www.countryflags.com/wp-content/uploads/saudi-arabia-flag-png-large.png' },
    { name: 'Bengali', flagUrl: 'https://www.countryflags.com/wp-content/uploads/flag-jpg-xl-14-2048x1229.jpg' },
    { name: 'Russian', flagUrl: 'https://www.countryflags.com/wp-content/uploads/russia-flag-png-large.png' },
    { name: 'Portuguese', flagUrl: 'https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png' },
    { name: 'Indonesian', flagUrl: 'https://www.countryflags.com/wp-content/uploads/indonesia-flag-png-large.png' },
    { name: 'German', flagUrl: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png' },
    { name: 'Japanese', flagUrl: 'https://www.countryflags.com/wp-content/uploads/japan-flag-png-large.png' },
    { name: 'Swahili', flagUrl: 'https://cdn.countryflags.com/thumbs/kenya/flag-400.png' },
    { name: 'Turkish', flagUrl: 'https://cdn.countryflags.com/thumbs/turkey/flag-400.png' },
    { name: 'Korean', flagUrl: 'https://cdn.countryflags.com/thumbs/south-korea/flag-400.png' },
    { name: 'Vietnamese', flagUrl: 'https://www.countryflags.com/wp-content/uploads/vietnam-flag-png-large.png' },
    { name: 'Italian', flagUrl: 'https://www.countryflags.com/wp-content/uploads/italy-flag-png-large.png' },
    { name: 'Thai', flagUrl: 'https://www.countryflags.com/wp-content/uploads/thailand-flag-png-large.png' },
    { name: 'Dutch', flagUrl: 'https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-large.png' },
    { name: 'Polish', flagUrl: 'https://www.countryflags.com/wp-content/uploads/poland-flag-png-large.png' },
];

export const newsUpdates: NewsUpdate[] = [
    {
        category: 'New Feature',
        title: '📲 WhatsApp Channel & Template Management',
        date: 'July 23, 2025',
        description: 'Connect your AI agent directly to WhatsApp Business for instant customer communication on the world\'s most popular messaging platform.',
        content: [
            { type: 'ul', items: [
                'Create, edit, and manage WhatsApp message templates directly from the dashboard with support for utility, marketing, and authentication categories.',
                'Connect multiple WhatsApp Business numbers to a single AI agent for comprehensive business coverage.',
                'Instant processing and response to incoming WhatsApp messages with AI-powered conversation intelligence.'
            ] },
        ]
    },
    {
        category: 'Product Update',
        title: '🔊 ElevenLabs Voices, Auto Optimize Tools etc.',
        date: 'June 30, 2025',
        description: 'Added premium voices from Eleven Labs and Play AI, a new tool optimizer, expanded documentation, and more.',
        content: [
            { type: 'ul', items: [
                'Added premium voices from Eleven Labs and Play AI. You can find them in your voice selector.',
                'Added a button to auto optimize tools by combining single tools (deprecated) into one of the multi tools.',
                'Added new documentation on the whole platform.',
                'Added sub-team views in White Label product.',
                'Lots of bug fixes for CRM, calendar scheduling, knowledgebase tools and more.',
                'Performance optimizations to improve latency on the main engine.'
            ] },
        ]
    },
    {
        category: 'New Feature',
        title: '🩺 Agent Doctor, New Models & More',
        date: 'June 18, 2025',
        description: 'Our Speedy model is now out of beta, and we\'ve launched Agent Doctor to provide a health check of your agent and suggest optimizations for maximum performance.',
        content: [
            { type: 'ul', items: [
                'Our Speedy model is now out of beta. Click on the model selector on top right corners of your instruction screen to switch back and forth between Speedy and Brainy (current model).',
                'Launched Agent Doctor which will give you a health check of your agent and suggest you ways to optimize the agent for Maximum performance.',
                'Health Check will check your agent\'s instructions, tools and configuration to give you personalized insights on how to train your agent better.',
                'Suggestions page will show you training suggestions based on your calls.',
                'Voice Picker will now give you more information about the voice (styles, voice response speed etc).',
                'Launched white label platform (first phase registrations are open, will close after a limited amount of seats have been filled).',
                'CRM now supports custom fields. Add custom fields to add additional information about your contacts.',
                'You can now assign contacts to team members.',
                'Advanced filtering is now available on Contacts.',
                'Launched custom Kanban Boards functionality. Create funnels or pipelines for your workflows (sales pipeline etc.)',
                'Lots of bug fixes and performance upgrades.'
            ] },
        ]
    },
    {
        category: 'Product Update',
        title: '😎 Human Like Voices, Faster Responses',
        date: 'June 4, 2025',
        description: 'Added 10+ new human-like voices with a new speech engine and improved performance across the speech stack.',
        content: [
            { type: 'ul', items: [
                'Added 10+ new voices that are human-like, with a new speech engine.',
                'Improved performance of the speech stack.',
                'Fixed bug where the caller would be cut off by the agent in some cases.',
                'Fixed bug with transcripts being split up.',
                'Improvements to the sentiment analysis engine.',
                'Improvements to call scoring and flagging algorithm.'
            ] },
        ]
    },
    {
        category: 'Platform',
        title: '🖥️ Better Portal, Faster Agents & More',
        date: 'May 25, 2025',
        description: 'Updated the UI and UX of the customer portal, improved engine performance by up to 60%, and enhanced the speech pipeline.',
        content: [
            { type: 'ul', items: [
                'Updated the UI and UX of the customer portal to make it easier to navigate.',
                'Improved engine performance by up to 60%.',
                'Improved speech pipeline to handle interruptions better.',
                'Updated web application architecture to make it faster to navigate around.',
                'Lot\'s of bug fixes and performance improvements across the board.'
            ] },
        ]
    },
    {
        category: 'Product Update',
        title: '⚡️ Faster Responses, Beta Features & More',
        date: 'April 25, 2025',
        description: 'Performance updates for 10-40% faster responses, a new speech engine, and the beta release of our Speedy engine.',
        content: [
            { type: 'ul', items: [
                'Performance updates to engine for 10-40% faster responses.',
                'Deployed new speech engine (Codename: Tangerine).',
                'Added Speedy engine (Beta). Add ENABLE-SPEEDY-ENGINE anywhere in your instructions to enable speedy engine for even faster responses. Your agent\'s behavior may change, so please ensure you test everything properly.',
                'Fixed issue with some call recordings not being recorded properly.',
                'Infrastructure updates. Your agent can handle even more calls at the same time now.',
                'Lots of bug fixes and performance enhancements.'
            ] },
        ]
    },
    {
        category: 'Product Update',
        title: '🙊 Faster Response, New Enhanced Voices & More.',
        date: 'March 19, 2025',
        description: 'Added over 10 new enhanced voices, redesigned the voice picker, and improved the voice pipeline for faster response times.',
        content: [
            { type: 'ul', items: [
                'Added over 10 new enhanced voices.',
                'Redesigned voice picker.',
                'Fixed issue where voice previews would overlap.',
                'Improved the voice pipeline to support faster response times.',
                'Added experimental "Speedy" engine that has much lower response latency (< 750ms). Contact support to find out how to enable it on your account.',
                'Added experimental optimization engine that results in better instruction following.',
                'Fixed issue with schedule tool where events would not load.',
                'Improved the speed and performance of the portal. Things should load faster now.',
                'Lots of other bug fixes and performance optimizations.'
            ] },
        ]
    },
    {
        category: 'Feature Update',
        title: '🗒️ Transfer Transcripts, Automated Call Analysis & More.',
        date: 'February 23, 2025',
        description: 'Our new automated call analysis engine is live, along with improved sentiment detection and full transcripts for transferred calls.',
        content: [
            { type: 'ul', items: [
                'Our new automated call analysis engine that will automatically flag calls with issues for our engineering team to review is live. This new engine is a part of our commitment to improving the reliability and stability of our platform.',
                'Improved sentiment and emotion detection. The caller\'s tone of voice, pace and other factors now have more weight in the sentiment information.',
                '[Beta] Training suggestions are now included with your transcript emails. These are actionable tips on how to make your agent better based on the call\'s performance.',
                'You will now be able to view all the transcripts even for the transferred portion of the call.',
                'The summary will now also contain the transferred portion of the call, giving you much better visibility.',
                'Lots of performance and bug fixes. Notable bugs fixed: transfer goes into loop sometimes, duplicated transfer messages when the call ends.'
            ] },
        ]
    },
    {
        category: 'Platform',
        title: '💰 Reduced Transfer Pricing, Call Recordings & More',
        date: 'February 20, 2025',
        description: 'We have reduced the pricing for transferred calls by 50%, and call recordings are now available in your portal.',
        content: [
            { type: 'ul', items: [
                'We have reduced the pricing for transferred calls by 50%. From now, you will receive 10 credits per minute back for the transferred portion of any call.',
                'Call recordings are now available in your portal, giving you an additional layer of visibility. Even the transferred portion of your phone call will be recorded.',
                'We have updated our transfer logic to make call transfers more seamless and reliable.',
                'Performance optimizations to make the engine even faster to respond.',
                'Lots of bug fixes.'
            ] },
        ]
    },
    {
        category: 'Product Update',
        title: '🤠 Faster Responses, New Voices & More.',
        date: 'February 15, 2025',
        description: 'Speech pipeline model updates for better noise handling and accuracy, resulting in faster responses and new realistic voices.',
        content: [
            { type: 'ul', items: [
                'Speech pipeline model updates to help with background noise, accuracy and response times.',
                'Faster response as a result of latency optimizations in the engine.',
                'New Realistic Voices: Asteria, Hera, Luna, Stella, Athena, Zeus, Orion, Arcas, Perseus, Angus, Orpheus, Helios.',
                'Lots of performance enhancements and bug fixes.'
            ] },
        ]
    },
    {
        category: 'Integration',
        title: '🔗 Upgraded Zapier Integration, Find Better Numbers & More.',
        date: 'January 4, 2025',
        description: 'The Zapier integration is now upgraded, Number Compass is available for finding vanity numbers, and conversation history is now on the Testing tab.',
        content: [
            { type: 'ul', items: [
                'The Zapier integration is now upgraded to work seamlessly with our second generation platform, with easier configuration.',
                'Number Compass is now available for everyone allowing you to find the best vanity phone number for your business.',
                'Conversation history is now available on the Testing tab.',
                'UI and UX improvements all over the platform.',
                'You can now embed an agent as a part of your website using our full width embed.',
                'Re-arranged navigation for easier access to things.',
                'Safe transfers are available for call transfers that fail.',
                'You can now instruct the agent to transfer call to another number if the first one fails.',
                'Lots of bug fixes and performance upgrades.'
            ] },
        ]
    },
    {
        category: 'Platform',
        title: '📲 Easier Phone Testing, Call Transfer Enhancements, Redesigned Portal & More.',
        date: 'December 25, 2024',
        description: 'Test your AI receptionist with a test number, chain call transfers, and enjoy a completely redesigned agent training area.',
        content: [
            { type: 'ul', items: [
                'You can now test your AI receptionist using a test phone number without having to purchase one. This is useful if you would like to see how your agent behaves in real world without picking a plan and getting a phone number from your SandBox account.',
                'Added ability to chain transfers, so that if one transfer fails the agent can automatically route the calls to another number.',
                'You can now enable Safe Transfers that will reduce call transfer failures even with strict carriers.',
                'Agent training area has been completely redesigned for better usability.',
                'Onboarding and setup has been completely revamped.',
                'Lots of other bug fixes and performance enhancements.'
            ] },
        ]
    },
    {
        category: 'Platform',
        title: '🎙️ Voice Chat in Portal, New Dashboard, Better Knowledge & More.',
        date: 'November 25, 2024',
        description: 'We’ve revamped your dashboard, moved the Knowledgebase to its own tab, and added voice chat for quick testing.',
        content: [
            { type: 'ul', items: [
                'We’ve revamped your dashboard to make it a breeze to find what you need.',
                'Your agent’s Knowledgebase is now in the “Knowledge” tab, making it a snap to update their info.',
                'Say goodbye to typing! Your agent’s “Chat” tab now has a voice mode, so you can talk like you’re on a phone call. This is perfect for testing and tweaking your agent quickly.',
                'We’ve also made some changes to how your agent interacts with the knowledge you provide, so they can give your callers more accurate and detailed answers.',
                'Oh, and there are a bunch of bugs we’ve fixed and performance improvements we’ve made throughout the platform.'
            ] },
        ]
    },
    {
        category: 'New Feature',
        title: '🎉 Tiny Button, Mighty Powers!',
        date: 'October 3, 2024',
        description: 'Introducing our new Magic Instructions feature! With minimal instructions, our AI engine automatically creates optimized prompts to handle real-world challenges.',
        content: [
            { type: 'p', text: 'Introducing our new Magic Instructions feature, now available on your AI Employee’s training page! With just a minimal set of instructions, our cutting-edge AI engine will automatically create optimized prompts tailored to handle real-world challenges.' },
            { type: 'p', text: 'This update also includes several performance improvements and bug fixes, ensuring an even smoother experience. Try it out now and streamline your AI workflows with the click of a button!' }
        ]
    },
    {
        category: 'Feature Update',
        title: '🌏 Agent Switching, Faster Multilingual Agents & More!',
        date: 'September 18, 2024',
        description: 'Seamlessly switch between agents, trigger actions with digit presses, set default languages, automate post-call tasks, and much more.',
        content: [
            { type: 'ul', items: [
                'Switch Agent Tool: Seamlessly switch between agents in various scenarios. Customize workflows to ensure the right agent is handling the call when needed.',
                'Digit-Triggered Actions: You can now listen to specific digit presses during phone calls. For example, you could instruct your agent to transfer to support when "0" is pressed, or switch the language to Spanish when "2" is pressed.',
                'Default Language Settings: Set your agent\'s default language from a selection of over 30 languages in the configuration page. Try asking your agent, "Talk to me in Hindi."',
                'Post-Call Task Automation: Instruct your agent to perform tasks even after a call ends, streamlining post-conversation workflows.',
                'Universal Fuzzy Search: Quickly find anything across your account with the new search feature. Access it instantly with CTRL+K or CMD+K.',
                'Voice & Language Fixes: Resolved issues with language settings for some voices to ensure smoother multilingual interactions.',
                'Tool Call Improvements: Fixed a bug where agents would mistakenly trigger tools like SMS multiple times during a call.',
                'Knowledge Retrieval Enhancements: Improved the accuracy and speed of information retrieval, ensuring your agents provide faster, smarter responses.',
                'Performance Boosts: Enhanced response speed and reliability of agents during calls, alongside various bug fixes and stability improvements.'
            ] },
            { type: 'p', text: 'We\'re continuously working to enhance your experience. Stay tuned for more updates!' },
            { type: 'p', text: 'We only started tracking changes towards the end of 2024. Older changes are not shown in this page.' }
        ]
    },
];