// Focus Mode Settings
let settings = {
    hideFeed: true,
    hideShorts: true,
    hideRelated: true,
    hideComments: true,
    hideNextBtn: true,
    showQuotes: true,
    autoInterval: 10,
    breakInterval: 30,
    dailyLimit: 120,
    pomoWorkDuration: 25,
    pomoBreakDuration: 5
};

// সহীহ হাদিস ও অনুপ্রেরণামূলক বাণী (বাংলায়)
const HADITH_QUOTES = [
    {
        text: "মানুষের ইসলামের অন্যতম সৌন্দর্য হলো অনর্থক ও অপ্রয়োজনীয় বিষয় ত্যাগ করা।",
        source: "হাদিস: সুনান আত-তিরমিজি (২৩১৭)"
    },
    {
        text: "এমন দুটি নিয়ামত আছে, যে ব্যাপারে অধিকাংশ মানুষ ক্ষতিগ্রস্ত— একটি স্বাস্থ্য এবং অপরটি অবসর।",
        source: "হাদিস: সহীহ বুখারী (৬৪১২)"
    },
    {
        text: "নিশ্চয়ই সমস্ত কাজের ফলাফল নিয়তের ওপর নির্ভরশীল।",
        source: "হাদিস: সহীহ বুখারী (১)"
    },
    {
        text: "পাঁচটি বিষয়ের পূর্বে পাঁচটি বিষয়কে মূল্যায়ন করো: বার্ধক্যের পূর্বে যৌবনকে, অসুস্থতার পূর্বে সুস্থতাকে, দারিদ্র্যের পূর্বে সচ্ছলতাকে, ব্যস্ততার পূর্বে অবসরকে এবং মৃত্যুর পূর্বে জীবনকে।",
        source: "হাদিস: আল-মুস্তাদরাক (৭৮৪৮)"
    },
    {
        text: "সবল মুমিন দুর্বল মুমিনের চেয়ে উত্তম এবং আল্লাহর কাছে বেশি প্রিয়। যা তোমার উপকার করবে তা অর্জনে সচেষ্ট হও এবং আল্লাহর সাহায্য চাও, কখনো অলস বা হতাশ হয়ো না।",
        source: "হাদিস: সহীহ মুসলিম (২৬৬৪)"
    },
    {
        text: "যে ব্যক্তি জ্ঞান অর্জনের পথে বের হয়, আল্লাহ তার জন্য জান্নাতের পথ সহজ করে দেন।",
        source: "হাদিস: সহীহ মুসলিম (২৬৯৯)"
    },
    {
        text: "আল্লাহর কাছে সবচেয়ে প্রিয় আমল হলো যা নিয়মিত করা হয়, তা পরিমাণে অল্প হলেও।",
        source: "হাদিস: সহীহ বুখারী (৬৪৬৫)"
    },
    {
        text: "আল্লাহ ঐ বান্দার কাজ পছন্দ করেন, যে কোনো কাজ করলে তা নিখুঁত ও নিষ্ঠার সাথে সম্পাদন করে।",
        source: "হাদিস: শুআবুল ঈমান (৪৯২৯)"
    },
    {
        text: "নিজের হাতের উপার্জনের চেয়ে উত্তম খাবার কেউ কখনো খায়নি।",
        source: "হাদিস: সহীহ বুখারী (২০৭২)"
    },
    {
        text: "ধৈর্য হলো এক উজ্জ্বল আলোকবর্তিকা।",
        source: "হাদিস: সহীহ মুসলিম (২২৩)"
    },
    {
        text: "তুমি যদি আল্লাহর ওপর যথাযথ ভরসা (তাওয়াক্কুল) করতে, তবে তিনি পাখিদের যেভাবে রিজিক দেন তোমাদেরও সেভাবে রিজিক দিতেন— যারা সকালে খালি পেটে বের হয় এবং সন্ধ্যায় ভরা পেটে ফিরে আসে।",
        source: "হাদিস: সুনান আত-তিরমিজি (২৩৪৪)"
    },
    {
        text: "যে ব্যক্তি মানুষের উপকারে আসে, সে-ই মানুষের মধ্যে সর্বোত্তম।",
        source: "হাদিস: আল-মু'জামুল আওসাত (৫৭৮৭)"
    },
    {
        text: "সকালবেলা আমার উম্মতের কাজে বরকত দান করা হয়েছে।",
        source: "হাদিস: সুনান আবু দাউদ (২৬০৬)"
    },
    {
        text: "হে আল্লাহ! আমি আপনার কাছে অলসতা, অক্ষমতা, ভীরুতা ও দুশ্চিন্তা থেকে পানাহ চাই।",
        source: "হাদিস: সহীহ বুখারী (২৮৯৩)"
    },
    {
        text: "জ্ঞান অর্জন করা প্রত্যেক মুসলমানের ওপর আবশ্যক (ফরজ)।",
        source: "হাদিস: সুনান ইবনে মাজাহ (২২৪)"
    },
    {
        text: "তোমাদের মধ্যে সেই ব্যক্তিই উত্তম, যার চরিত্র ও আচরণ সর্বোত্তম।",
        source: "হাদিস: সহীহ বুখারী (৬০৩৫)"
    },
    {
        text: "মুমিনের প্রতিটি অবস্থাতেই কল্যাণ থাকে— সুখে সে শুকরিয়া আদায় করে, আর বিপদে ধৈর্য ধারণ করে।",
        source: "হাদিস: সহীহ মুসলিম (২৯৯৯)"
    },
    {
        text: "প্রকৃত বীর সে নয় যে কুস্তিতে অন্যকে পরাস্ত করে, বরং প্রকৃত বীর সে যে রাগের মুহূর্তে নিজেকে নিয়ন্ত্রণ করতে পারে।",
        source: "হাদিস: সহীহ বুখারী (৬১১৪)"
    },
    {
        text: "যে ব্যক্তি ধৈর্য ধারণের চেষ্টা করে, আল্লাহ তাকে ধৈর্যশীল বানিয়ে দেন। আর ধৈর্যের চেয়ে উত্তম ও প্রশস্ত দান কাউকে দেওয়া হয়নি।",
        source: "হাদিস: সহীহ বুখারী (১৪৬৯)"
    },
    {
        text: "সহজ করো, কঠিন করো না; সুসংবাদ দাও, মানুষকে দূরে ঠেলে দিয়ো না।",
        source: "হাদিস: সহীহ বুখারী (৬৯)"
    },
    {
        text: "দুনিয়াতে এমনভাবে জীবনযাপন করো, যেন তুমি একজন প্রবাসী মুসাফির বা পথিক।",
        source: "হাদিস: সহীহ বুখারী (৬৪১৬)"
    },
    {
        text: "আল্লাহ সুন্দর এবং তিনি সৌন্দর্যকে ভালোবাসেন।",
        source: "হাদিস: সহীহ মুসলিম (৯১)"
    },
    {
        text: "যে ব্যক্তি মানুষের কৃতজ্ঞতা প্রকাশ করে না, সে আল্লাহর প্রতিও কৃতজ্ঞ হতে পারে না।",
        source: "হাদিস: সুনান আবু দাউদ (৪৮১১)"
    },
    {
        text: "কোনো ব্যক্তি মারা গেলে তিনটি কাজ ছাড়া সব বন্ধ হয়ে যায়: সদকায়ে জারিয়া, উপকারী জ্ঞান, এবং নেক সন্তান যে তার জন্য দোয়া করে।",
        source: "হাদিস: সহীহ মুসলিম (১৬৩১)"
    },
    {
        text: "তোমাদের কেউ যেন কোনো সৎ কাজকে তুচ্ছ মনে না করে, এমনকি তা যদি তোমার ভাইয়ের সাথে হাস্যোজ্জ্বল মুখে দেখা করাও হয়।",
        source: "হাদিস: সহীহ মুসলিম (২৬২৬)"
    },
    {
        text: "মুমিনের ওপর যে কোনো ক্লান্তি, রোগ, শোক বা দুশ্চিন্তা— এমনকি একটি কাঁটার আঘাত এলেও আল্লাহ তার বিনিময়ে তার পাপ মার্জনা করেন।",
        source: "হাদিস: সহীহ বুখারী (৫৬৪১)"
    },
    {
        text: "উত্তম ও মিষ্টি কথা বলাও একটি সদকা (পুণ্য)।",
        source: "হাদিস: সহীহ বুখারী (২৯৮৯)"
    },
    {
        text: "পাপ থেকে আন্তরিকভাবে তওবাকারী ব্যক্তি এমন, যেন তার কোনো পাপই ছিল না।",
        source: "হাদিস: সুনান ইবনে মাজাহ (৪২৫০)"
    },
    {
        text: "লজ্জাশীলতা ও শালীনতা শুধুই কল্যাণ বয়ে নিয়ে আসে।",
        source: "হাদিস: সহীহ বুখারী (৬১১৭)"
    },
    {
        text: "পরের মুখাপেক্ষী না হয়ে আত্মমর্যাদা নিয়ে নিজ হাতে কাজ করা অন্যের কাছে হাত পাতার চেয়ে বহুগুণে উত্তম।",
        source: "হাদিস: সহীহ বুখারী (১৪৭১)"
    },
    {
        text: "আল্লাহ সেই ব্যক্তির মুখমণ্ডল উজ্জ্বল করুন, যে আমার কথা শুনে তা মনে রাখে এবং যথাযথভাবে অন্যের কাছে পৌঁছে দেয়।",
        source: "হাদিস: সুনান আত-তিরমিজি (২৬৫৭)"
    },
    {
        text: "তোমাদের মধ্যে সর্বোত্তম ব্যক্তি সে, যে নিজে কুরআন শেখে এবং অন্যকে শিক্ষা দেয়।",
        source: "হাদিস: সহীহ বুখারী (৫০২৭)"
    },
    {
        text: "জ্ঞানীর মর্যাদা একজন সাধারণ ইবাদতকারীর ওপর তেমনই, যেমন পূর্ণিমার চাঁদের মর্যাদা সমস্ত তারকার ওপর।",
        source: "হাদিস: সুনান আবু দাউদ (৩৬৪১)"
    },
    {
        text: "যে ব্যক্তি নিজের ক্রোধ সংবরণ করতে পারে, অথচ তা বাস্তবায়নের পূর্ণ ক্ষমতা তার ছিল— কিয়ামতের দিন আল্লাহ সমস্ত সৃষ্টির সামনে তাকে পুরস্কৃত করবেন।",
        source: "হাদিস: সুনান আবু দাউদ (৪৭৭৭)"
    },
    {
        text: "দোয়া ছাড়া আর কোনো কিছুই ভাগ্যকে পরিবর্তন করতে পারে না, আর নেক আমল ছাড়া আর কিছুই হায়াত বৃদ্ধি করতে পারে না।",
        source: "হাদিস: সুনান আত-তিরমিজি (২১৩৯)"
    },
    { 
        text: "যে ব্যক্তি আল্লাহ ও পরকালের ওপর ঈমান রাখে, সে যেন ভালো কথা বলে অথবা চুপ থাকে।", 
        source: "হাদিস: সহীহ বুখারী (৬০১৮), সহীহ মুসলিম (৪৭)" 
    },
    { 
        text: "প্রকৃত মুসলিম সেই ব্যক্তি, যার জিহ্বা ও হাতের অনিষ্ট থেকে অন্য মানুষ নিরাপদ থাকে।", 
        source: "হাদিস: সহীহ বুখারী (১০)" 
    },
    { 
        text: "সত্যবাদিতা মানুষকে পুণ্যের পথে নিয়ে যায়, আর পুণ্য মানুষকে জান্নাতের দিকে পরিচালিত করে।", 
        source: "হাদিস: সহীহ বুখারী (৬০৯৪)" 
    },
    { 
        text: "তোমরা সততা অবলম্বন করো; কেননা সততা অন্তরে প্রশান্তি দেয়, আর মিথ্যা অন্তরে সংশয় তৈরি করে।", 
        source: "হাদিস: সুনান আত-তিরমিজি (২৫১৮)" 
    },
    { 
        text: "যে ব্যক্তি আল্লাহর সন্তুষ্টির জন্য বিনয় ও নম্রতা অবলম্বন করে, আল্লাহ তার মর্যাদা বৃদ্ধি করে দেন।", 
        source: "হাদিস: সহীহ মুসলিম (২৫৮৮)" 
    },
    { 
        text: "যার অন্তরে অণু পরিমাণ অহংকার থাকবে, সে জান্নাতে প্রবেশ করতে পারবে না।", 
        source: "হাদিস: সহীহ মুসলিম (৯১)" 
    },
    { 
        text: "ক্ষমাশীলতার দ্বারা আল্লাহ বান্দার সম্মান ও মর্যাদা বহুগুণে বৃদ্ধি করেন।", 
        source: "হাদিস: সহীহ মুসলিম (২৫৮৮)" 
    },
    { 
        text: "নিশ্চয়ই আল্লাহ কোমল ও দয়ালু, তিনি প্রতিটি কাজেই কোমলতা পছন্দ করেন।", 
        source: "হাদিস: সহীহ বুখারী (৬৯২৭)" 
    },
    { 
        text: "তোমাদের মধ্যে সেই ব্যক্তি সর্বোত্তম, যার কাছ থেকে মানুষ সবসময় কল্যাণের প্রত্যাশা করে এবং যার অনিষ্ট থেকে নিরাপদ থাকে।", 
        source: "হাদিস: সুনান আত-তিরমিজি (২২৫৩)" 
    },
    { 
        text: "যে ব্যক্তি কোনো মুমিনের পার্থিব কষ্ট দূর করে দেবে, আল্লাহ কিয়ামতের দিন তার কষ্টসমূহ দূর করে দেবেন।", 
        source: "হাদিস: সহীহ মুসলিম (২৬৯৯)" 
    },
    { 
        text: "আমি ও এতিমের দায়িত্ব গ্রহণকারী ব্যক্তি জান্নাতে পাশাপাশি থাকব— এই বলে তিনি তর্জনী ও মধ্যমা আঙুল মিলিয়ে দেখালেন।", 
        source: "হাদিস: সহীহ বুখারী (৫৩০৪)" 
    },
    { 
        text: "বান্দা যতক্ষণ তার ভাইয়ের সাহায্যে রত থাকে, আল্লাহ ততক্ষণ সেই বান্দার সাহায্যে রত থাকেন।", 
        source: "হাদিস: সহীহ মুসলিম (২৬৯৯)" 
    },
    { 
        text: "যে ব্যক্তি কোনো ভালো বা কল্যাণমূলক কাজের পথ দেখায়, সে ঐ ভালো কাজ সম্পাদনকারীর সমান সওয়াব পাবে।", 
        source: "হাদিস: সহীহ মুসলিম (১৮৯৩)" 
    },
    { 
        text: "তোমরা জমিনবাসীদের প্রতি দয়া করো, তাহলে যিনি আকাশে আছেন তিনি তোমাদের প্রতি দয়া করবেন।", 
        source: "হাদিস: সুনান আত-তিরমিজি (১৯২৪)" 
    },
    { 
        text: "আল্লাহ যার চূড়ান্ত কল্যাণ চান, তাকে দ্বীন ও জীবনের গভীর প্রজ্ঞা এবং সঠিক বুঝ দান করেন।", 
        source: "হাদিস: সহীহ বুখারী (৭১)" 
    },
    { 
        text: "হে আল্লাহ! আমাকে এমন জ্ঞান দান করুন যা আমার উপকারে আসে, আর আমাকে যা শিখিয়েছেন তা দ্বারা আমাকে উপকৃত করুন।", 
        source: "হাদিস: সুনান আত-তিরমিজি (৩৫৯৯)" 
    },
    { 
        text: "প্রজ্ঞাপূর্ণ কথা হলো জ্ঞান অন্বেষণকারীর হারানো সম্পদ, যেখানেই সে তা পায়, তা গ্রহণ করার সবচেয়ে বেশি হকদার সে-ই।", 
        source: "হাদিস: সুনান আত-তিরমিজি (২৬৮৭)" 
    },
    { 
        text: "তোমাদের প্রত্যেকেই একেকজন দায়িত্বশীল, এবং প্রত্যেককেই তার দায়িত্ব সম্পর্কে জবাবদিহি করতে হবে।", 
        source: "হাদিস: সহীহ বুখারী (৮৯৩)" 
    },
    { 
        text: "আল্লাহ ঐ ব্যক্তির ওপর রহম করুন, যে কেনাবেচা ও দেনা-পাওনা পরিশোধের ক্ষেত্রে সদাচারী ও উদার আচরণ করে।", 
        source: "হাদিস: সহীহ বুখারী (২০৭৬)" 
    },
    { 
        text: "যে ব্যক্তি তার রবের স্মরণ (জিকির) করে আর যে করে না— তাদের উদাহরণ জীবিত ও মৃতের ন্যায়।", 
        source: "হাদিস: সহীহ বুখারী (৬৪০৭)" 
    },
    { 
        text: "আল্লাহ তাআলা বলেন: আমার বান্দা আমার প্রতি যেমন বিশ্বাস ও ধারণা রাখে, আমি তার সাথে ঠিক তেমনই আচরণ করি।", 
        source: "হাদিস: সহীহ বুখারী (৭৪০৫)" 
    },
    { 
        text: "দুটি বাক্য মুখে উচ্চারণে সহজ, মিজানের পাল্লায় ভারী এবং পরম দয়াময় আল্লাহর কাছে অতীব প্রিয়: 'সুবহানাল্লাহি ওয়া বিহামদিহী, সুবহানাল্লাহিল আজীম'।", 
        source: "হাদিস: সহীহ বুখারী (৬৪০৬)" 
    },
    { 
        text: "আল্লাহর সন্তুষ্টি রয়েছে পিতা-মাতার সন্তুষ্টিতে, আর আল্লাহর অসন্তুষ্টি রয়েছে পিতা-মাতার অসন্তুষ্টিতে।", 
        source: "হাদিস: সুনান আত-তিরমিজি (১৮৯৯)" 
    },
    { 
        text: "তোমাদের মধ্যে যে ব্যক্তি কোনো অন্যায় বা অনিষ্ট দেখে, সে যেন তা হাত দিয়ে প্রতিহত করে; অপারগ হলে মুখ দিয়ে বলে, আর তা-ও না পারলে অন্তত অন্তর দিয়ে ঘৃণা করে।", 
        source: "হাদিস: সহীহ মুসলিম (৪৯)" 
    },
    { 
        text: "প্রকৃত সচ্ছলতা ও প্রাচুর্য সম্পদের আধিক্যে নয়, বরং প্রকৃত প্রাচুর্য হলো মনের সন্তুষ্টি ও তৃপ্তি।", 
        source: "হাদিস: সহীহ বুখারী (৬৪৪৬)" 
    },
    { 
        text: "তোমরা লোভ ও কৃপণতা থেকে বেঁচে থাকো; কেননা এই লোভই তোমাদের পূর্ববর্তী মানুষদের ধ্বংস করেছে।", 
        source: "হাদিস: সহীহ মুসলিম (২৫৭৮)" 
    },
    { 
        text: "তোমরা হিংসা থেকে বেঁচে থাকো; কেননা আগুন যেভাবে শুকনো কাঠ পুড়িয়ে ছাই করে দেয়, হিংসা সেভাবেই মানুষের ভালো কাজগুলোকে ধ্বংস করে।", 
        source: "হাদিস: সুনান আবু দাউদ (৪৯০৩)" 
    },
    { 
        text: "যে ব্যক্তি মানুষের সাথে সহজ, নম্র ও বিনম্র আচরণ করে, জাহান্নামের আগুন তার জন্য হারাম হয়ে যায়।", 
        source: "হাদিস: সুনান আত-তিরমিজি (২৪৮৮)" 
    },
    { 
        text: "যে ব্যক্তি কোনো মুসলিমের গোপনীয় ত্রুটি গোপন রাখবে, আল্লাহ দুনিয়া ও আখিরাতে তার দোষত্রুটি গোপন রাখবেন।", 
        source: "হাদিস: সহীহ মুসলিম (২৬৯৯)" 
    },
    { 
        text: "তোমাদের কেউ ততক্ষণ পর্যন্ত পূর্ণ ঈমানদার হতে পারবে না, যতক্ষণ না সে তার ভাইয়ের জন্য তা-ই পছন্দ করে যা সে নিজের জন্য পছন্দ করে।", 
        source: "হাদিস: সহীহ বুখারী (১৩)" 
    },
    { 
        text: "নিশ্চয়ই সত্যের বিজয় ও সাহায্য রয়েছে ধৈর্যের সাথে, সংকটের পরই আসে স্বস্তি, আর কষ্টের সাথেই রয়েছে পরম স্বাচ্ছন্দ্য।", 
        source: "হাদিস: মুসনাদে আহমাদ (২৮০৩)" 
    },
    { 
        text: "যে ব্যক্তি নিয়মিত আল্লাহর কাছে ক্ষমা প্রার্থনা (ইস্তিগফার) করে, আল্লাহ তার সকল সংকটে উত্তরণের পথ খুলে দেন এবং অপ্রত্যাশিত উৎস থেকে রিজিক দান করেন।", 
        source: "হাদিস: সুনান আবু দাউদ (১৫১৮)" 
    },
    { 
        text: "দান-সদকা কখনো মানুষের সম্পদ কমায় না, বরং সম্পদে প্রবৃদ্ধি ও বরকত দান করে।", 
        source: "হাদিস: সহীহ মুসলিম (২৫৮৮)" 
    },
    { 
        text: "যে ব্যক্তি নিজের জবান ও লজ্জাস্থানের হেফাজতের দায়িত্ব নেবে, আমি তার জান্নাতের দায়িত্ব গ্রহণ করব।", 
        source: "হাদিস: সহীহ বুখারী (৬৪৭৪)" 
    },
    { 
        text: "তোমাদের মধ্যে সর্বাধিক পরিপূর্ণ ঈমানের অধিকারী সে, যার চরিত্র ও ব্যবহার সবচেয়ে বেশি সুন্দর।", 
        source: "হাদিস: সুনান আবু দাউদ (৪৬৮২)" 
    }
];

// এক্সটেনশন কনটেক্সট ভ্যালিডিটি হেল্পার (রিলোড বা আপডেটের পর এরর প্রতিরোধ)
function isExtensionValid() {
    try {
        return typeof chrome !== "undefined" && !!chrome.runtime && !!chrome.runtime.id;
    } catch (e) {
        return false;
    }
}

// HTML ট্যাগে লাইভ ডাটা-অ্যাট্রিবিউট আপডেট করা যাতে CSS সরাসরি কাজ করে
function updateAttributes() {
    document.documentElement.setAttribute("data-hide-feed", settings.hideFeed ? "true" : "false");
    document.documentElement.setAttribute("data-hide-shorts", settings.hideShorts ? "true" : "false");
    document.documentElement.setAttribute("data-hide-related", settings.hideRelated ? "true" : "false");
    document.documentElement.setAttribute("data-hide-comments", settings.hideComments ? "true" : "false");
    document.documentElement.setAttribute("data-hide-next", settings.hideNextBtn ? "true" : "false");
    document.documentElement.setAttribute("data-show-quotes", settings.showQuotes ? "true" : "false");
}

// ডিফল্টভাবে document_start-এ সেট করা
updateAttributes();

// স্টোরেজ থেকে ইউজারের সেটিংস লোড করা
chrome.storage.sync.get([
    "hideFeed",
    "hideShorts",
    "hideRelated",
    "hideComments",
    "hideNextBtn",
    "showQuotes",
    "autoInterval",
    "breakInterval",
    "dailyLimit",
    "pomo_work_duration",
    "pomo_break_duration"
], (data) => {
    if (data.hideFeed !== undefined) settings.hideFeed = data.hideFeed;
    if (data.hideShorts !== undefined) settings.hideShorts = data.hideShorts;
    if (data.hideRelated !== undefined) settings.hideRelated = data.hideRelated;
    if (data.hideComments !== undefined) settings.hideComments = data.hideComments;
    if (data.hideNextBtn !== undefined) settings.hideNextBtn = data.hideNextBtn;
    if (data.showQuotes !== undefined) settings.showQuotes = data.showQuotes;
    if (data.autoInterval !== undefined) settings.autoInterval = data.autoInterval;
    if (data.breakInterval !== undefined) settings.breakInterval = data.breakInterval;
    if (data.dailyLimit !== undefined) settings.dailyLimit = Number(data.dailyLimit);
    if (data.pomo_work_duration !== undefined) settings.pomoWorkDuration = Number(data.pomo_work_duration);
    if (data.pomo_break_duration !== undefined) settings.pomoBreakDuration = Number(data.pomo_break_duration);
    updateAttributes();
    applyFocusMode();
    checkDailyStrictLimit();
});

// পপআপ থেকে টগল অন/অফ করলে সাথে সাথে লাইভ পরিবর্তন হওয়া
chrome.storage.onChanged.addListener((changes, areaName) => {
    if (areaName === "sync") {
        if (changes.hideFeed !== undefined) settings.hideFeed = changes.hideFeed.newValue;
        if (changes.hideShorts !== undefined) settings.hideShorts = changes.hideShorts.newValue;
        if (changes.hideRelated !== undefined) settings.hideRelated = changes.hideRelated.newValue;
        if (changes.hideComments !== undefined) {
            settings.hideComments = changes.hideComments.newValue;
            setupCommentsToggle();
        }
        if (changes.hideNextBtn !== undefined) settings.hideNextBtn = changes.hideNextBtn.newValue;
        if (changes.showQuotes !== undefined) settings.showQuotes = changes.showQuotes.newValue;
        if (changes.autoInterval !== undefined) {
            settings.autoInterval = changes.autoInterval.newValue;
            restartAutoRotateTimer();
        }
        if (changes.breakInterval !== undefined) {
            settings.breakInterval = changes.breakInterval.newValue;
            resetBreakThreshold();
        }
        if (changes.dailyLimit !== undefined) {
            settings.dailyLimit = Number(changes.dailyLimit.newValue);
            checkDailyStrictLimit();
        }
        if (changes.pomo_work_duration !== undefined) {
            settings.pomoWorkDuration = Number(changes.pomo_work_duration.newValue);
        }
        if (changes.pomo_break_duration !== undefined) {
            settings.pomoBreakDuration = Number(changes.pomo_break_duration.newValue);
        }
        updateAttributes();
        applyFocusMode();
    } else if (areaName === "local") {
        if (changes.emergency_pass_until !== undefined) {
            checkDailyStrictLimit();
        }
        if (changes.pomo_state || changes.pomo_mode || changes.pomo_remaining || changes.pomo_target_time) {
            updateFloatingPomodoroPill();
        }
    }
});

function applyFocusMode() {
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";
    const isWatchPage = window.location.pathname.startsWith("/watch");

    // হোম ফিড টগল হ্যান্ডলিং
    if (isHomePage && settings.hideFeed) {
        injectPlaceholder();
    } else {
        removePlaceholder();
    }

    // শর্টস রিডাইরেক্ট হ্যান্ডলিং
    if (settings.hideShorts && window.location.pathname.startsWith("/shorts/")) {
        const videoId = window.location.pathname.split("/shorts/")[1]?.split("?")[0];
        if (videoId) {
            window.location.replace(`https://www.youtube.com/watch?v=${videoId}`);
            return;
        }
    }

    // ওয়াচ পেজ ক্লিন মোড হ্যান্ডলিং (Option 1)
    if (isWatchPage) {
        setupCommentsToggle();
    }
}

let currentHadithIndex = -1;

function getDailyHadith() {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    currentHadithIndex = dayOfYear % HADITH_QUOTES.length;
    return HADITH_QUOTES[currentHadithIndex];
}

function getRandomHadith() {
    let nextIndex;
    do {
        nextIndex = Math.floor(Math.random() * HADITH_QUOTES.length);
    } while (HADITH_QUOTES.length > 1 && nextIndex === currentHadithIndex);
    currentHadithIndex = nextIndex;
    return HADITH_QUOTES[currentHadithIndex];
}

let rotateTimer = null;
let isCardHovered = false;

// মসৃণ এনিমেশনের সাথে পরবর্তী হাদিস প্রদর্শন
function displayNextHadith(animate = true) {
    const nextHadith = getRandomHadith();
    const qText = document.getElementById("yt-quote-text");
    const qAuthor = document.getElementById("yt-quote-author");
    if (!qText || !qAuthor) return;

    if (animate) {
        qText.classList.add("yt-quote-transitioning");
        qAuthor.classList.add("yt-quote-transitioning");
        setTimeout(() => {
            qText.textContent = nextHadith.text;
            qAuthor.textContent = `— ${nextHadith.source}`;
            qText.classList.remove("yt-quote-transitioning");
            qAuthor.classList.remove("yt-quote-transitioning");
        }, 250);
    } else {
        qText.textContent = nextHadith.text;
        qAuthor.textContent = `— ${nextHadith.source}`;
    }
}

// স্বয়ংক্রিয় রোটেশন টাইমার শুরু করা
function startAutoRotateTimer() {
    stopAutoRotateTimer();
    const intervalSec = Number(settings.autoInterval);
    if (intervalSec && intervalSec > 0) {
        rotateTimer = setInterval(() => {
            if (!isCardHovered) {
                displayNextHadith(true);
            }
        }, intervalSec * 1000);
    }
}

// টাইমার বন্ধ করা
function stopAutoRotateTimer() {
    if (rotateTimer) {
        clearInterval(rotateTimer);
        rotateTimer = null;
    }
}

function restartAutoRotateTimer() {
    stopAutoRotateTimer();
    startAutoRotateTimer();
}

// ==========================================================================
// OPTION C: TIME TRACKING & BREAK REMINDER
// ==========================================================================
let sessionSeconds = 0;
let nextBreakThreshold = 0;
let isBreakModalShown = false;

function resetBreakThreshold() {
    const intervalMin = Number(settings.breakInterval) || 0;
    if (intervalMin > 0) {
        nextBreakThreshold = sessionSeconds + (intervalMin * 60);
    } else {
        nextBreakThreshold = 0;
    }
}

// মৃদু অ্যালার্ট সাউন্ড (Web Audio API)
function playBreakChime() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioCtx.currentTime;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(523.25, now); // C5
        osc.frequency.exponentialRampToValueAtTime(783.99, now + 0.25); // G5
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(now);
        osc.stop(now + 0.8);
    } catch (e) {}
}

function showBreakModal(mins) {
    if (document.getElementById("yt-break-modal") || isBreakModalShown) return;
    isBreakModalShown = true;

    const modal = document.createElement("div");
    modal.id = "yt-break-modal";
    modal.className = "yt-break-modal-overlay";
    modal.innerHTML = `
        <div class="yt-break-card">
            <div class="yt-break-header">
                <span class="yt-break-icon-wrap" style="display:inline-flex; align-items:center;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                </span>
                <h4 class="yt-break-title">বিরতি নেওয়ার সময় হয়েছে</h4>
            </div>
            <p class="yt-break-desc">আপনি একটানা <b>${mins} মিনিট</b> ইউটিউবে আছেন। চোখের বিশ্রাম নিন এবং একটু হেঁটে আসুন।</p>
            <div class="yt-break-actions">
                <button type="button" class="yt-break-btn yt-break-btn-secondary" id="yt-break-snooze">১০ মিনিট পর</button>
                <button type="button" class="yt-break-btn yt-break-btn-primary" id="yt-break-dismiss">ঠিক আছে</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector("#yt-break-dismiss").addEventListener("click", () => {
        modal.remove();
        isBreakModalShown = false;
    });

    modal.querySelector("#yt-break-snooze").addEventListener("click", () => {
        modal.remove();
        isBreakModalShown = false;
        nextBreakThreshold = sessionSeconds + (10 * 60);
    });
}

function getLocalDateString() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
}

function formatMinutes(seconds) {
    if (!seconds || seconds < 60) return "< 1m";
    const mins = Math.floor(seconds / 60);
    if (mins < 60) return `${mins}m`;
    const hours = Math.floor(mins / 60);
    const remMins = mins % 60;
    return remMins > 0 ? `${hours}h ${remMins}m` : `${hours}h`;
}

// প্রতি ৫ সেকেন্ডে সক্রিয় স্ক্রিন টাইম ট্র্যাক করা
const trackingInterval = setInterval(() => {
    if (!isExtensionValid()) {
        clearInterval(trackingInterval);
        return;
    }

    if (document.visibilityState !== "visible") return;

    sessionSeconds += 5;

    // ব্রেক রিমাইন্ডার চেক
    const intervalMin = Number(settings.breakInterval) || 0;
    if (intervalMin > 0) {
        if (nextBreakThreshold === 0) {
            nextBreakThreshold = intervalMin * 60;
        }
        if (sessionSeconds >= nextBreakThreshold && !isBreakModalShown) {
            showBreakModal(Math.round(sessionSeconds / 60));
            playBreakChime();
            nextBreakThreshold += (intervalMin * 60);
        }
    }

    // লোকাল স্টোরেজে দৈনিক সময় আপডেট করা
    const todayStr = getLocalDateString();
    try {
        chrome.storage.local.get(["yt_today_date", "yt_today_seconds"], (res) => {
            if (!isExtensionValid()) return;
            let currentTodaySec = 0;
            if (res.yt_today_date === todayStr) {
                currentTodaySec = (res.yt_today_seconds || 0) + 5;
            } else {
                currentTodaySec = 5; // নতুন দিন শুরু হলে রিসেট
            }

            chrome.storage.local.set({
                yt_today_date: todayStr,
                yt_today_seconds: currentTodaySec,
                yt_session_seconds: sessionSeconds
            });

            // হোমপেজে টাইম পিল আপডেট
            const timeValEl = document.getElementById("yt-home-today-time");
            if (timeValEl) {
                timeValEl.textContent = formatMinutes(currentTodaySec);
            }

            // দৈনিক কঠোর সময়সীমা চেক করা (Option 3)
            checkDailyStrictLimit(currentTodaySec);
        });
    } catch (e) {
        if (!isExtensionValid()) clearInterval(trackingInterval);
    }
}, 5000);

function injectPlaceholder() {
    if (document.getElementById("yt-focus-welcome-card")) return;

    const browse = document.querySelector("ytd-browse[page-subtype='home']");
    if (browse) {
        const hadith = getDailyHadith();
        const card = document.createElement("div");
        card.id = "yt-focus-welcome-card";
        card.className = "yt-focus-placeholder";

        card.innerHTML = `
            <div class="yt-focus-badge">
                <span class="pulse-dot"></span>
                <span>ফোকাস স্পেস</span>
            </div>

            <!-- আজকের স্ক্রিন টাইম ব্যাজ -->
            <div class="yt-focus-time-pill">
                <span style="display:inline-flex; align-items:center; gap:4px;">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    আজকের স্ক্রিন টাইম:
                </span>
                <span id="yt-home-today-time" style="font-weight: 700; margin-left: 3px;">লোড হচ্ছে...</span>
            </div>

            <div class="yt-focus-header">
                <h1 class="yt-focus-greeting">সময়ের সদ্ব্যবহার করুন</h1>
                <p class="yt-focus-subtext">অনর্থক বিষয় এড়িয়ে চলুন। যা প্রয়োজন তা ওপরের সার্চ বারে খুঁজুন।</p>
            </div>

            <!-- হাদিস ও ইসলামিক বাণী কার্ড -->
            <div class="yt-focus-quote-wrap" id="yt-focus-quote-wrap">
                <svg class="yt-focus-quote-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p class="yt-focus-quote-text" id="yt-quote-text">${hadith.text}</p>
                <div class="yt-focus-quote-footer">
                    <span class="yt-focus-quote-author" id="yt-quote-author">— ${hadith.source}</span>
                    <button type="button" id="yt-focus-quote-refresh" title="আরেকটি হাদিস পড়ুন">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
                        </svg>
                        <span>পরবর্তী হাদিস</span>
                    </button>
                </div>
            </div>

            <!-- কীবোর্ড শর্টকাট গাইড -->
            <div class="yt-focus-search-hint">
                 কিবোর্ডে <kbd>/</kbd> চাপলে ওপরের সার্চ বারে সরাসরি কার্সর চলে যাবে
            </div>
        `;
        browse.prepend(card);

        // হোমপেজে স্ক্রিন টাইম তাৎক্ষণিক প্রদর্শন
        const todayStr = new Date().toISOString().slice(0, 10);
        if (isExtensionValid()) {
            chrome.storage.local.get(["yt_today_date", "yt_today_seconds"], (res) => {
                if (!isExtensionValid()) return;
                const timeValEl = card.querySelector("#yt-home-today-time");
                if (timeValEl) {
                    const todaySec = res.yt_today_date === todayStr ? (res.yt_today_seconds || 0) : 0;
                    timeValEl.textContent = formatMinutes(todaySec);
                }
            });
        }

        // মাউস কার্ডের ওপর রাখলে রোটেশন পজ করা যাতে পড়ার সুবিধা হয়
        const quoteWrap = card.querySelector("#yt-focus-quote-wrap");
        if (quoteWrap) {
            quoteWrap.addEventListener("mouseenter", () => { isCardHovered = true; });
            quoteWrap.addEventListener("mouseleave", () => { isCardHovered = false; });
        }

        // হাদিস রিফ্রেশ হ্যান্ডলার
        const refreshBtn = card.querySelector("#yt-focus-quote-refresh");
        if (refreshBtn) {
            refreshBtn.addEventListener("click", () => {
                displayNextHadith(true);
                restartAutoRotateTimer(); // ইউজার ক্লিক করলে টাইমার রিসেট হবে
            });
        }

        // অটো রোটেশন টাইমার শুরু করা
        startAutoRotateTimer();
    }
}

function removePlaceholder() {
    stopAutoRotateTimer();
    const card = document.getElementById("yt-focus-welcome-card");
    if (card) card.remove();
}

// কিবোর্ড শর্টকাট '/' দিয়ে ওপরের মূল সার্চ বক্সে তাৎক্ষণিক ফোকাস
window.addEventListener("keydown", (e) => {
    const activeEl = document.activeElement;
    const isInputFocused = activeEl && (
        activeEl.tagName === "INPUT" ||
        activeEl.tagName === "TEXTAREA" ||
        activeEl.isContentEditable
    );

    if (e.key === "/" && !isInputFocused) {
        e.preventDefault();
        const topInput = document.querySelector("input#search, input.ytSearchboxComponentInput");
        if (topInput) {
            topInput.focus();
            topInput.select();
        }
    }

    if (e.key === "Escape") {
        if (activeEl && activeEl.tagName === "INPUT") {
            activeEl.blur();
        }
    }

    // Next ভিডিও শর্টকাট (Shift+N) ব্লক করা
    if (e.shiftKey && (e.key === "N" || e.key === "n") && settings.hideNextBtn && !isInputFocused) {
        e.preventDefault();
        e.stopPropagation();
    }
});

// ==========================================================================
// WATCH PAGE CLEAN MODE HELPERS (OPTION 1)
// ==========================================================================
function setupCommentsToggle() {
    const isWatchPage = window.location.pathname.startsWith("/watch");
    const existingPill = document.getElementById("yt-toggle-comments-pill");

    if (!isWatchPage || !settings.hideComments) {
        if (existingPill) {
            const wrap = existingPill.closest(".yt-toggle-comments-wrap");
            if (wrap) wrap.remove();
            else existingPill.remove();
        }
        return;
    }

    if (existingPill) return;

    const commentsSection = document.querySelector(
        "ytd-watch-flexy #comments, ytd-watch-grid #comments, ytd-comments, #comments"
    );
    if (!commentsSection) return;

    const SVG_CHAT = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:4px;"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`;
    const SVG_EYE_OFF = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px; margin-right:4px;"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="23" x2="23" y2="1"></line></svg>`;

    const wrap = document.createElement("div");
    wrap.className = "yt-toggle-comments-wrap";
    wrap.innerHTML = `
        <button type="button" id="yt-toggle-comments-pill" class="yt-toggle-comments-pill">
            <span id="yt-comments-icon">${SVG_CHAT}</span>
            <span id="yt-comments-text">কমেন্ট দেখুন (Show Comments)</span>
        </button>
    `;

    commentsSection.parentNode.insertBefore(wrap, commentsSection);

    const btn = wrap.querySelector("#yt-toggle-comments-pill");
    const textSpan = wrap.querySelector("#yt-comments-text");
    const iconSpan = wrap.querySelector("#yt-comments-icon");

    btn.addEventListener("click", () => {
        const isRevealed = document.documentElement.getAttribute("data-comments-revealed") === "true";
        if (isRevealed) {
            document.documentElement.setAttribute("data-comments-revealed", "false");
            textSpan.textContent = "কমেন্ট দেখুন (Show Comments)";
            iconSpan.innerHTML = SVG_CHAT;
        } else {
            document.documentElement.setAttribute("data-comments-revealed", "true");
            textSpan.textContent = "কমেন্ট হাইড করুন (Hide Comments)";
            iconSpan.innerHTML = SVG_EYE_OFF;
            commentsSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}

// ==========================================================================
// OPTION 3: STRICT DAILY LIMIT & POMODORO TIMER
// ==========================================================================

// ১. দৈনিক কঠোর সময়সীমা এনফোর্সমেন্ট
function checkDailyStrictLimit(todaySec) {
    if (!isExtensionValid()) return;
    const todayStr = new Date().toISOString().slice(0, 10);
    const limitMin = Number(settings.dailyLimit) || 0;

    const removeOverlays = () => {
        const lock = document.getElementById("yt-strict-lock-overlay");
        if (lock) lock.remove();
        const banner = document.getElementById("yt-emergency-pass-banner");
        if (banner) banner.remove();
    };

    if (limitMin <= 0) {
        removeOverlays();
        return;
    }

    const limitSec = limitMin * 60;

    const evaluateLimit = (sec) => {
        if (sec < limitSec) {
            removeOverlays();
            return;
        }

        if (!isExtensionValid()) return;

        // সীমা শেষ হয়েছে! জরুরি ৫ মিনিটের পাস সক্রিয় কিনা পরীক্ষা
        chrome.storage.local.get(["emergency_pass_until"], (localData) => {
            if (!isExtensionValid()) return;
            const passUntil = localData.emergency_pass_until || 0;
            const now = Date.now();

            if (passUntil > now) {
                // জরুরি পাস চালু রয়েছে
                const lock = document.getElementById("yt-strict-lock-overlay");
                if (lock) lock.remove();

                const remPassSec = Math.max(0, Math.round((passUntil - now) / 1000));
                const remPassMin = Math.ceil(remPassSec / 60);

                let banner = document.getElementById("yt-emergency-pass-banner");
                if (!banner) {
                    banner = document.createElement("div");
                    banner.id = "yt-emergency-pass-banner";
                    banner.className = "yt-emergency-pass-banner";
                    document.body.prepend(banner);
                }
                banner.innerHTML = `
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                            <line x1="12" y1="9" x2="12" y2="13"></line>
                            <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <span>জরুরি ৫ মিনিট পাস সক্রিয়: আর <b>${remPassMin} মিনিট</b> বাকি আছে</span>
                    </span>
                `;
            } else {
                // কোনো পাস নেই! স্ট্রিক্ট লক স্ক্রিন কার্যকর করা
                const banner = document.getElementById("yt-emergency-pass-banner");
                if (banner) banner.remove();

                // চলমান ভিডিও থাকলে পজ করা
                const video = document.querySelector("video");
                if (video && !video.paused) {
                    video.pause();
                }

                if (!document.getElementById("yt-strict-lock-overlay")) {
                    const hadith = getDailyHadith();
                    const overlay = document.createElement("div");
                    overlay.id = "yt-strict-lock-overlay";
                    overlay.className = "yt-strict-lock-overlay";

                    overlay.innerHTML = `
                        <div class="yt-strict-lock-card">
                            <div class="yt-lock-icon-halo">
                                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                </svg>
                            </div>
                            <h2 class="yt-strict-lock-title">আজকের দৈনিক সীমা পূর্ণ হয়েছে</h2>
                            <p class="yt-strict-lock-subtext">
                                আপনি আজকের জন্য নির্ধারিত <b>${limitMin >= 60 ? (limitMin / 60) + ' ঘণ্টা' : limitMin + ' মিনিট'}</b> ইউটিউব ব্যবহারের সীমা অতিক্রম করেছেন। সময়কে এখন আরও প্রয়োজনীয় ও গঠনমূলক কাজে ব্যয় করুন।
                            </p>
                            
                            <div class="yt-strict-time-pill">
                                <span style="display:inline-flex; align-items:center; gap:5px;">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    আজকের মোট সময়: ${formatMinutes(sec)}
                                </span>
                            </div>

                            <div class="yt-strict-quote-box">
                                <p class="yt-strict-quote-text">"${hadith.text}"</p>
                                <span class="yt-strict-quote-author">— ${hadith.source}</span>
                            </div>

                            <div class="yt-strict-actions">
                                <button type="button" class="yt-strict-btn yt-strict-btn-emergency" id="yt-btn-emergency-pass">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px; vertical-align:-2px;">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 6 12 12 16 14"></polyline>
                                    </svg>
                                    <span>জরুরি ৫ মিনিট পাস</span>
                                </button>
                                <button type="button" class="yt-strict-btn yt-strict-btn-close" id="yt-btn-close-tab">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px; vertical-align:-2px;">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                    </svg>
                                    <span>হোমপেজে যান</span>
                                </button>
                            </div>
                        </div>
                    `;

                    document.body.appendChild(overlay);

                    overlay.querySelector("#yt-btn-emergency-pass").addEventListener("click", () => {
                        const newPassUntil = Date.now() + (5 * 60 * 1000);
                        chrome.storage.local.set({ emergency_pass_until: newPassUntil }, () => {
                            checkDailyStrictLimit();
                        });
                    });

                    overlay.querySelector("#yt-btn-close-tab").addEventListener("click", () => {
                        window.location.href = "https://www.google.com";
                    });
                }
            }
        });
    };

    if (todaySec !== undefined) {
        evaluateLimit(todaySec);
    } else if (isExtensionValid()) {
        chrome.storage.local.get(["yt_today_date", "yt_today_seconds"], (res) => {
            if (!isExtensionValid()) return;
            const sec = res.yt_today_date === todayStr ? (res.yt_today_seconds || 0) : 0;
            evaluateLimit(sec);
        });
    }
}

// ২. পোমোডোরো ফোকাস টাইমার অ্যালার্ট ও সাউন্ড
function playPomodoroAlarmSound() {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const now = audioCtx.currentTime;

        const osc1 = audioCtx.createOscillator();
        const gain1 = audioCtx.createGain();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(587.33, now); // D5
        osc1.frequency.exponentialRampToValueAtTime(880, now + 0.3); // A5
        gain1.gain.setValueAtTime(0.08, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
        osc1.connect(gain1);
        gain1.connect(audioCtx.destination);
        osc1.start(now);
        osc1.stop(now + 0.7);

        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(880, now + 0.25);
        osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.55); // D6
        gain2.gain.setValueAtTime(0.08, now + 0.25);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.0);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.start(now + 0.25);
        osc2.stop(now + 1.0);
    } catch (e) {}
}

function showPomodoroCompletedModal(mode) {
    if (document.getElementById("yt-pomodoro-modal")) return;

    const modal = document.createElement("div");
    modal.id = "yt-pomodoro-modal";
    modal.className = "yt-break-modal-overlay";

    const isWorkDone = mode === "work";
    const modalIconSvg = isWorkDone
        ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
        : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

    const actionBtnSvg = isWorkDone
        ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px; vertical-align:-2px;"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>বিরতি শুরু করুন`
        : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="margin-right:5px; vertical-align:-2px;"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>ফোকাস শুরু করুন`;

    modal.innerHTML = `
        <div class="yt-break-card" style="border-left-color: ${isWorkDone ? '#ef4444' : '#10b981'};">
            <div class="yt-break-header">
                <span style="display:inline-flex; align-items:center;">${modalIconSvg}</span>
                <h4 class="yt-break-title">${isWorkDone ? 'পোমোডোরো সেশন সম্পন্ন!' : 'বিরতি শেষ!'}</h4>
            </div>
            <p class="yt-break-desc">
                ${isWorkDone 
                    ? `আপনি একটানা <b>${settings.pomoWorkDuration || 25} মিনিট</b> সম্পূর্ণ মনোযোগ দিয়ে কাটিয়েছেন। অসাধারণ! এখন ${settings.pomoBreakDuration || 5} মিনিটের বিশ্রাম নিন।` 
                    : `আপনার ${settings.pomoBreakDuration || 5} মিনিটের রিফ্রেশিং বিরতি শেষ হয়েছে। নতুন ${settings.pomoWorkDuration || 25} মিনিটের ফোকাস সেশনের জন্য প্রস্তুত হন!`}
            </p>
            <div class="yt-break-actions">
                <button type="button" class="yt-break-btn yt-break-btn-secondary" id="yt-pomo-modal-dismiss">ঠিক আছে</button>
                <button type="button" class="yt-break-btn yt-break-btn-primary" id="yt-pomo-modal-action" style="background: ${isWorkDone ? '#10b981' : '#ef4444'};">
                    ${actionBtnSvg}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector("#yt-pomo-modal-dismiss").addEventListener("click", () => {
        modal.remove();
    });

    modal.querySelector("#yt-pomo-modal-action").addEventListener("click", () => {
        modal.remove();
        if (isWorkDone) {
            const remSec = (settings.pomoBreakDuration || 5) * 60;
            const target = Date.now() + (remSec * 1000);
            chrome.storage.local.set({
                pomo_mode: "break",
                pomo_state: "running",
                pomo_remaining: remSec,
                pomo_target_time: target
            });
        } else {
            const remSec = (settings.pomoWorkDuration || 25) * 60;
            const target = Date.now() + (remSec * 1000);
            chrome.storage.local.set({
                pomo_mode: "work",
                pomo_state: "running",
                pomo_remaining: remSec,
                pomo_target_time: target
            });
        }
    });
}

function updateFloatingPomodoroPill() {
    if (!isExtensionValid()) return;
    try {
        chrome.storage.local.get(["pomo_state", "pomo_mode", "pomo_remaining", "pomo_target_time"], (data) => {
            if (!isExtensionValid()) return;
            const state = data.pomo_state || "idle";
            const mode = data.pomo_mode || "work";

        if (state === "idle") {
            const pill = document.getElementById("yt-pomodoro-floating-pill");
            if (pill) pill.remove();
            return;
        }

        const defaultSec = mode === "break" 
            ? ((settings.pomoBreakDuration || 5) * 60) 
            : ((settings.pomoWorkDuration || 25) * 60);
        let secondsLeft = data.pomo_remaining !== undefined ? data.pomo_remaining : defaultSec;

        if (state === "running" && data.pomo_target_time) {
            secondsLeft = Math.max(0, Math.round((data.pomo_target_time - Date.now()) / 1000));
            if (secondsLeft <= 0) {
                playPomodoroAlarmSound();
                showPomodoroCompletedModal(mode);

                const nextMode = mode === "work" ? "break" : "work";
                const nextRem = nextMode === "break" 
                    ? ((settings.pomoBreakDuration || 5) * 60) 
                    : ((settings.pomoWorkDuration || 25) * 60);
                chrome.storage.local.set({
                    pomo_state: "idle",
                    pomo_mode: nextMode,
                    pomo_remaining: nextRem,
                    pomo_target_time: null
                });
                return;
            }
        }

        let pill = document.getElementById("yt-pomodoro-floating-pill");
        if (!pill) {
            pill = document.createElement("div");
            pill.id = "yt-pomodoro-floating-pill";
            pill.className = "yt-pomo-floating-pill";
            document.body.appendChild(pill);
        }

        if (mode === "break") {
            pill.classList.add("is-break");
        } else {
            pill.classList.remove("is-break");
        }

        if (state === "paused") {
            pill.classList.add("is-paused");
        } else {
            pill.classList.remove("is-paused");
        }

        const m = Math.floor(secondsLeft / 60);
        const s = secondsLeft % 60;
        const timeStr = `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

        const floatModeIcon = mode === "break"
            ? `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path></svg>`
            : `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`;

        const floatToggleIcon = state === "running"
            ? `<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`
            : `<svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;

        pill.innerHTML = `
            <span class="pomo-float-dot"></span>
            <span style="display:inline-flex; align-items:center;">${floatModeIcon}</span>
            <span class="pomo-float-time">${timeStr}</span>
            <button type="button" class="yt-pomo-float-btn" id="yt-pomo-float-toggle" title="${state === 'running' ? 'পজ করুন' : 'চালু করুন'}">
                ${floatToggleIcon}
            </button>
        `;

        const toggleBtn = pill.querySelector("#yt-pomo-float-toggle");
        if (toggleBtn) {
            toggleBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                if (state === "running") {
                    chrome.storage.local.set({
                        pomo_state: "paused",
                        pomo_remaining: secondsLeft,
                        pomo_target_time: null
                    });
                } else {
                    const target = Date.now() + (secondsLeft * 1000);
                    chrome.storage.local.set({
                        pomo_state: "running",
                        pomo_remaining: secondsLeft,
                        pomo_target_time: target,
                        pomo_mode: mode
                    });
                }
            });
        }
    });
    } catch (e) {
        if (!isExtensionValid() && typeof pomoInterval !== "undefined") {
            clearInterval(pomoInterval);
        }
    }
}

// পোমোডোরো টাইমার শুরু করা
const pomoInterval = setInterval(() => {
    if (!isExtensionValid()) {
        clearInterval(pomoInterval);
        return;
    }
    updateFloatingPomodoroPill();
}, 1000);
if (isExtensionValid()) updateFloatingPomodoroPill();

// YouTube SPA নেভিগেশন হ্যান্ডলিং
window.addEventListener("yt-navigate-finish", () => {
    document.documentElement.setAttribute("data-comments-revealed", "false");
    const existingPill = document.getElementById("yt-toggle-comments-pill");
    if (existingPill) {
        const wrap = existingPill.closest(".yt-toggle-comments-wrap");
        if (wrap) wrap.remove();
        else existingPill.remove();
    }
    applyFocusMode();
    checkDailyStrictLimit();
});
window.addEventListener("popstate", () => {
    applyFocusMode();
    checkDailyStrictLimit();
});

// DOM পর্যবেক্ষণ করা
const observer = new MutationObserver(() => {
    const isHomePage = window.location.pathname === "/" || window.location.pathname === "";
    const isWatchPage = window.location.pathname.startsWith("/watch");

    if (isHomePage && settings.hideFeed) {
        injectPlaceholder();
    }

    if (isWatchPage) {
        if (settings.hideComments && !document.getElementById("yt-toggle-comments-pill")) {
            setupCommentsToggle();
        }
    }
});

observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});

applyFocusMode();
