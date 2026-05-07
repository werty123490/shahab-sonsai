// api/getReview.js

const W_OPENERS = [
  "Shahab & Sons Cosmetics Wholesaler in Hadha Sarai is the first name that comes to mind when starting a new cosmetic retail business in Varanasi",
  "Visited Shahab & Sons for bulk purchases and the wholesale selection genuinely rivals the biggest distributors anywhere in the state",
  "Was looking for a reliable supplier to open a new shop and Shahab & Sons had everything in stock with complete authenticity",
  "Finally found a wholesale store in Varanasi where you can buy bulk cosmetics without worrying about fake products, Shahab & Sons is it",
  "My search for a genuine FMCG wholesaler ended at Shahab & Sons and the experience from selection to free packaging was smoothly professional",
  "Shahab & Sons in Sultan Katra is where I send everyone who asks me for business guidance in the cosmetics market, no exceptions",
  "Walked into Shahab & Sons to start my retail journey and left understanding the entire cosmetics market better thanks to the owner's expert advice",
  "The range of wholesale products at Shahab & Sons is extraordinary, covering everything a new shop needs from day one",
  "Started my business purchasing from Shahab & Sons, carrying on a family tradition that has trusted this shop since 1987",
  "Shahab & Sons has established itself as the go-to wholesale destination in the Hadha Sarai area and their 70-year legacy confirms why",
  "Came all the way from Bihar to purchase wholesale stock and Shahab & Sons provided genuine rates and an incredibly smooth billing process",
  "Discovered Shahab & Sons while looking for FMCG goods and found a store that makes starting a business genuinely enjoyable rather than stressful",
  "The moment you walk into Shahab & Sons you can tell this is a store that takes the cosmetics wholesale business seriously at every level",
  "Have been sourcing products in Varanasi for over 15 years and Shahab & Sons is the first store where I have never had a single complaint about quality",
  "A fellow shopkeeper recommended Shahab & Sons for my new store purchase and the authenticity of the products and the fair margins were outstanding",
  "Running a retail cosmetics shop in Jaunpur and have never found a Varanasi wholesaler more dependable than Shahab & Sons",
  "Heard about Shahab & Sons through the wholesale market network and the reputation they have built there is completely deserved",
  "Three generations of shopkeepers from our family have sourced their inventory from Shahab & Sons and the trust has never wavered once",
  "The first wholesale supplier who explained product margins clearly and honestly to me was the owner at Shahab & Sons and that has kept me loyal ever since",
  "Visited every major wholesaler in Varanasi before settling on Shahab & Sons and the difference in authentic product guarantee is night and day",
  "No other wholesaler in the entire Purvanchal region has the breadth of genuine cosmetics stock that Shahab & Sons maintains year-round",
  "Shahab & Sons is the rare wholesale shop that actually helps you build a sustainable retail business rather than just pushing stock at you",
  "The wholesale market in Hadha Sarai has many stores but Shahab & Sons stands apart because of its commitment to zero counterfeit inventory",
  "Placed my first bulk order at Shahab & Sons five years ago and every order since has confirmed that this is simply the best cosmetics wholesaler in Varanasi",
  "My distributor from Gorakhpur specifically told me to visit Shahab & Sons for authentic FMCG products and the advice was absolutely spot on",
  "Found Shahab & Sons through a Google search and the reviews were not exaggerating, the wholesale experience here is genuinely world-class for Varanasi",
  "Every retail shopkeeper I know in eastern UP traces their most reliable stock source back to Shahab & Sons in Hadha Sarai",
  "Came to Varanasi specifically for the wholesale cosmetics market and left with the strong conviction that Shahab & Sons is the only stop worth making",
  "The consistency with which Shahab & Sons delivers genuine products and competitive rates over decades is what separates it from every competitor in the region",
  "Opened my second shop last year and sourced everything from Shahab & Sons because my first shop's success was built entirely on their authentic wholesale stock"
];

const W_DETAILS = [
  "The wholesale rates at Shahab & Sons are so competitive that they easily beat online platforms, giving retail shop owners excellent margins",
  "They provide complete guidance for new business owners so that you make the perfect choice for your inventory without overspending",
  "The free packaging service they offer for bulk goods is something very few wholesale shops do, and it saves so much hassle",
  "Every product at Shahab & Sons is 100 percent genuine, which completely eliminates the grey-market uncertainty that plagues the cosmetic industry",
  "The staff at Shahab & Sons helped me compare different FMCG brands and the stock recommendations they gave proved exactly right for my village shop",
  "They carefully pack all your purchased goods without any extra charge, making it incredibly easy to transport items back to districts like Ghazipur or Azamgarh",
  "Shahab & Sons stocks products suited to every market tier, making it easy to match your shop's inventory to your specific customer base",
  "The variety at Shahab & Sons is a reminder that this store does not limit itself to just basic cosmetics, they cover the entire FMCG spectrum",
  "They honestly disclose the market trends and guide you away from bad purchases, which is invaluable for a first-time shop owner",
  "The stock at Shahab & Sons is always fresh, properly sealed, and comes with full assurance of brand authenticity",
  "Shahab & Sons carries inventory that appeals to both premium retail buyers and budget-conscious village shops without sacrificing their authenticity guarantee",
  "The owner has a deep, practical understanding of the cosmetics business and shares that knowledge generously with new entrepreneurs",
  "The billing process at Shahab & Sons is completely transparent and they provide proper GST invoices, which makes accounting easy for retail owners",
  "Stock replenishment at Shahab & Sons is fast and they always have backup inventory so you are never told your required item is out of stock",
  "The product range covers national brands as well as fast-moving regional labels, ensuring your shop inventory matches your specific customer demand perfectly",
  "Shahab & Sons maintains relationships with all major cosmetics companies directly, which means their pricing is at true wholesale levels without middlemen",
  "The advice given by the staff on seasonal inventory planning has saved me from overstocking slow-moving items multiple times",
  "Every item purchased from Shahab & Sons comes with complete batch details and expiry verification so you can confidently resell without any worry",
  "Shahab & Sons is one of the very few wholesalers in Varanasi who will exchange stock if it turns out to be slow-moving in your local market",
  "The sheer volume of authentic brands stocked at Shahab & Sons means you can complete your entire shop purchase in a single visit without running around the market",
  "Their wholesale price list is updated regularly and the owner ensures margins remain fair even when supplier costs fluctuate in the market",
  "Shahab & Sons does not charge hidden costs for sorting, packing, or loading goods, the price you are quoted is the price you pay",
  "The experience of the staff in recommending the right product mix for different shop locations, whether urban or rural, is genuinely impressive",
  "New shop owners receive patient, unhurried guidance at Shahab & Sons without any pressure to buy more than their budget allows",
  "The wholesale catalogue at Shahab & Sons is comprehensive enough that even specialty cosmetics shops can source their complete inventory from one location"
];

const W_HI = [
  "Nayi dukaan kholne ke liye Shahab & Sons aaye the, yahan original items aur best wholesale rate milta hai",
  "Bihar se aakar yahan se stock liya, inka behaviour aur free packaging facility ne genuinely impress kiya",
  "Azamgarh se aaye the yeh dekhne ki itna naam kyun hai, aur inki guidance ne mujhe galat purchases se bacha liya",
  "Pichle 15 saal se meri dukaan ka saaman Shahab & Sons se hi aa raha hai, hamesha fresh stock aur genuine products",
  "Ghazipur se hoon aur FMCG ke liye hamesha Shahab & Sons par trust kiya hai, inka 75 saal ka experience clearly dikhta hai",
  "Business start karne walo ke liye Shahab & Sons best hai, proper guidance milti hai aur rates market se genuinely kam hain",
  "Harahua se 2000 se yahan aa raha hoon, inki service aur genuine rates mein aaj tak koi kami nahi aayi",
  "Jakhaniya aur Sadat se bahut log yahan aate hain kyunki yahan online se bhi saste rates par original products milte hain",
  "Free packaging service itni achi hai ki doosre zila mein saaman le jaane mein koi tension nahi hoti",
  "Shahab & Sons mein naye business owners ko genuinely treat kiya jaata hai, koi pressure nahi hota faltu saaman lene ka",
  "Jaunpur se aakar bulk cosmetics liya, Shahab & Sons ne bilkul sahi rate aur ekdum sahi guidance di naye stock ke liye",
  "Mirzapur se aaye the aur Shahab & Sons ka naam sunte sunte aaye the, woh sab kuch sach nikla jo logo ne bataya tha",
  "Varanasi ke poore wholesale market mein ghume aur har jagah Shahab & Sons ka naam best aata hai, jo bilkul sahi bhi hai",
  "Pehli bar bulk purchase mein ghanta ek ghante mein hi poora dukaan ka saaman ho gaya, itna organized store hai Shahab & Sons",
  "Ek senior shopkeeper ne bataya tha Shahab & Sons ke baare mein, aaj 10 saal ho gaye, woh advice meri best business decision thi",
  "Dukaan ka pehla stock yahan se liya aur customers ne genuine products ki taarif ki, tab se sirf Shahab & Sons hi aate hain",
  "Hamirpur se cosmetics wholesale ke liye Varanasi aana padta hai aur Shahab & Sons ke alawa koi option sochte bhi nahi hain",
  "Rate card dekh ke pehle yakeen nahi hua ki itne authentic products itne reasonable rate pe milenge, Shahab & Sons genuinely best hai",
  "Balia aur Mau ke bahut shopkeepers bhi Shahab & Sons se hi stock lete hain, poore Purvanchal mein inki reputation number one hai",
  "Stock lene ke baad jo GST bill mila woh ekdum clear aur proper tha, accounting mein koi problem nahi hoti Shahab & Sons ke saath"
];

const P_OPENERS = [
  "Shahab & Sons is the most reliable destination for beauty parlour supplies in Varanasi and my recent kit purchase confirmed that completely",
  "The professional makeup section at Shahab & Sons has a curated selection of brands that covers every bridal and parlour need",
  "Bought my entire beauty parlour setup from Shahab & Sons and the genuine products gave my clients total confidence",
  "Was nervous about sourcing professional cosmetics locally but Shahab & Sons completely changed that, the authenticity is excellent",
  "Shahab & Sons helped me build a professional bridal kit with a product comparison that showed genuine knowledge of modern makeup trends",
  "Every foundation, brush set, and makeup kit at Shahab & Sons is original and the staff can tell you exactly why brand authenticity matters for skin",
  "For professional parlour supplies in Varanasi there is Shahab & Sons and then there is everything else, the gap in quality is significant",
  "My beauty parlour business relies entirely on Shahab & Sons because the trust and product consistency there is simply unmatched",
  "Walked into Shahab & Sons for basic parlour supplies and walked out with an entire upgraded kit that has genuinely improved my service quality",
  "Setting up a new parlour in Chandauli and was advised by every experienced beautician to source from Shahab & Sons, the advice was completely right",
  "The bridal season in Varanasi demands the highest quality cosmetics and Shahab & Sons is the only wholesaler who consistently meets that standard",
  "Sourcing parlour supplies used to be my biggest headache until I found Shahab & Sons and now the process is completely smooth and trustworthy",
  "My clients have commented on the noticeable improvement in makeup finish ever since I shifted entirely to Shahab & Sons sourced products",
  "Travelled from Allahabad specifically for beauty parlour stock after a colleague recommended Shahab & Sons and the journey was absolutely worth it",
  "The professional cosmetics section at Shahab & Sons is stocked with such depth and variety that even seasoned makeup artists discover new products there",
  "After years of dealing with unreliable suppliers, finding Shahab & Sons felt like finally getting the professional partner my parlour deserved",
  "No other cosmetics store in Varanasi has invested as much in stocking genuine professional-grade parlour supplies as Shahab & Sons has",
  "Opened my third parlour branch and sourced all professional cosmetics from Shahab & Sons because they have never once let me down on quality",
  "The expertise of the staff at Shahab & Sons in matching parlour supplies to specific skin tone requirements is something no other store in the city offers"
];

const P_DETAILS = [
  "The professional makeup kits at Shahab & Sons are available for every skin tone requirement and the staff understand the professional specs properly",
  "Beauty parlour supplies from foundations to nail paints are available under one roof with a guarantee of zero counterfeit items",
  "The cosmetic brush ranges at Shahab & Sons cover both basic utility and professional blending requirements perfectly",
  "Shahab & Sons completes every parlour purchase with sensible recommendations for fast-moving items that will increase daily business revenue",
  "The premium skincare range at Shahab & Sons is the right choice for professionals who refuse to compromise on client safety and results",
  "They carry everything from basic daily skincare to full high-end bridal makeup kits, keeping stock perfectly current with market trends",
  "The authenticity of the lipsticks and eye makeup at Shahab & Sons ensures parlour owners never have to worry about client allergic reactions",
  "Professional heavy-base foundations and setting sprays at Shahab & Sons are stocked specifically for the local climate and bridal season needs",
  "The bridal makeup collection at Shahab & Sons is refreshed regularly and the staff stay current with seasonal trends so your parlour never looks outdated",
  "Setting powders, contour palettes, and professional blushes are available in depth of shade range that satisfies even the most particular makeup artist",
  "Shahab & Sons maintains stock of both well-known international brands and trusted Indian professional labels, giving parlour owners the best of both markets",
  "The staff at Shahab & Sons can guide a new parlour owner through building a complete professional kit within any given budget without compromising quality",
  "Every product bought for parlour use at Shahab & Sons is properly batch-coded so you can verify authenticity and check expiry before applying to clients",
  "The nail care section at Shahab & Sons is extensive enough to support a dedicated nail art studio, not just a basic parlour service menu",
  "Shahab & Sons stocks professional hair colour ranges alongside cosmetics, making it a single-stop source for full-service beauty parlour requirements",
  "The availability of genuine dermatologically tested skincare at Shahab & Sons gives parlour owners confidence when treating clients with sensitive skin",
  "Wax kits, threading essentials, and facial tools at Shahab & Sons complete the parlour supply experience beyond just colour cosmetics"
];

const P_HI = [
  "Beauty parlour ka saara saaman Shahab & Sons se liya, sab original nikla aur clients ka response bahut acha hai",
  "Bridal makeup kit ke liye Shahab & Sons best jagah hai, saare branded foundations aur palettes ek hi jagah mil gaye",
  "Chunar se Varanasi aayi thi parlour ka saaman lene, inki variety aur affordable rates ne genuinely khush kar diya",
  "Shahab & Sons par professional brushes aur nail paint ki variety itni badi hai ki metro city jaane ki zaroorat nahi padti",
  "Parlour ke liye jo bhi naya brand market mein aata hai, woh sabse pehle Shahab & Sons par authentic seal ke saath mil jata hai",
  "Yahan cosmetics ki quality se kabhi compromise nahi hota, aur yahi wajah hai ki hamara inpar itna lamba trust hai",
  "Foundation aur makeup kit ka itna huge collection maine Varanasi mein kahin aur nahi dekha, genuinely premium store",
  "Nayi parlour kholi thi toh ek senior beautician ne Shahab & Sons ka naam suggest kiya, woh suggestion meri best decision thi",
  "Bridal season mein stock khatam hone ki tension Shahab & Sons ke hote nahi hoti, woh hamesha puri quantity mein ready rehte hain",
  "Setting spray aur heavy-base products jo poore din makeup set rakhte hain woh sirf Shahab & Sons pe milte hain Varanasi mein",
  "Clients ki skin reaction kabhi nahi aayi Shahab & Sons ke products se, yahi guarantee hai original cosmetics ki",
  "Professional nail art kit bhi Shahab & Sons se liya, variety aur quality dono mein yeh store sab se aage hai",
  "Parlour mein naye brands introduce karne se pehle Shahab & Sons par jaake dekho, woh already latest stock rakhte hain"
];

const F_OPENERS = [
  "Shahab & Sons in Hadha Sarai is where I go for all general cosmetics after repeatedly being disappointed by duplicate products elsewhere",
  "The FMCG and daily cosmetic section at Shahab & Sons is one of the most comprehensive I have found in Varanasi",
  "Every single skincare and daily use product at Shahab & Sons is 100 percent original and properly batch-verified",
  "Shahab & Sons carries daily cosmetics for every need, from basic lotions to premium skincare, and the quality standard is consistent",
  "Could not find a reliable supplier for authentic daily wear cosmetics until Shahab & Sons, and now it is my only stop",
  "The variety of general items at Shahab & Sons extends the store's coverage to every kind of customer without any compromise on authenticity",
  "Bought basic skincare items from Shahab & Sons and the freshness of the stock reinforces why buying from an authorized wholesaler matters",
  "For daily-use FMCG cosmetics in Varanasi, Shahab & Sons has no genuine competitor because the combination of variety and authenticity is unique",
  "Shopping for general cosmetics at Shahab & Sons feels different because everything from moisturiser to sunscreen is stocked with serious attention to quality",
  "My retail shop's daily cosmetics section has never had a single customer complaint since I shifted entirely to sourcing from Shahab & Sons",
  "The general cosmetics inventory at Shahab & Sons is so well-maintained that even mid-season product changes never leave their shelves empty",
  "Shahab & Sons is the Varanasi cosmetics store that has genuinely made the entire FMCG daily-use category trustworthy for local retail buyers",
  "Every face wash, lotion, and sunscreen I buy for my shop comes from Shahab & Sons and the customer return rate has improved significantly",
  "Tried many suppliers for daily cosmetic goods before discovering Shahab & Sons and the authenticity difference was immediately visible to my customers"
];

const F_DETAILS = [
  "The skincare range at Shahab & Sons includes every price tier and the staff can help you pick the right fast-moving items for retail",
  "Daily use lipsticks and nail paints are heavily stocked in every current shade, making inventory management incredibly easy",
  "FMCG products at Shahab & Sons come with proper billing and honest margins, a properly complete wholesale experience",
  "Basic moisturizers, face washes, and daily beauty items are always in stock in bulk quantities so you never have to turn a customer away",
  "The general cosmetics at Shahab & Sons appeal to everyday buyers who value reliable quality over unverified local alternatives",
  "Sunscreens, toners, and serums for daily skincare are available at Shahab & Sons in both budget and premium tiers to match any retail market",
  "The FMCG cosmetics at Shahab & Sons are sourced directly from authorized distributors so every product carries valid batch codes and authentic packaging",
  "Hair care products including shampoos, conditioners, and oils are stocked alongside cosmetics at Shahab & Sons, making it a true one-stop FMCG shop",
  "Daily deodorants, talcum powders, and body lotions are available in bulk at Shahab & Sons with rates that give retail owners strong competitive margins",
  "The cold cream and winter skincare range at Shahab & Sons is stocked seasonally well in advance, ensuring you never miss peak demand period",
  "Shahab & Sons keeps its general cosmetics section organized by brand and category, making it easy to compare options and complete a full purchase quickly",
  "The staff at Shahab & Sons know exactly which daily-use items sell fastest in different markets and tailor their recommendations accordingly",
  "Perfumes and deodorant sprays at Shahab & Sons are available in genuine sealed packaging with no risk of refilled or counterfeit products",
  "Baby care cosmetics and gentle skincare lines are also available at Shahab & Sons, catering to shops that serve young family customers"
];

const F_HI = [
  "Daily use ke cosmetics aur FMCG products ke liye Shahab & Sons se better rate poore Banaras mein nahi hai",
  "Nail paint aur lipstick ki itni variety hai yahan ki dukaan ke liye display select karna bahut aasan ho jata hai",
  "Skincare products sab original milte hain, duplicate ka koi dar nahi hota jab aap Shahab & Sons se shopping karte ho",
  "General items ka stock hamesha fresh rehta hai, expiry date ki kabhi koi complaint nahi aayi inke yahan se",
  "Jo bhi naya customer aakar basic skincare maangta hai, uske liye Shahab & Sons ka stock hamesha sufficient aur best hota hai",
  "Face wash aur moisturizer ke itne options hain Shahab & Sons mein ki alag alag budget ke customers sab satisfy ho jaate hain",
  "FMCG goods ka jo billing system hai Shahab & Sons mein woh bilkul clear hai, koi hidden charge nahi hota kabhi",
  "Shampoo se lekar sunscreen tak sab ek hi jagah milta hai Shahab & Sons mein, time aur paisa dono bachta hai",
  "Shahab & Sons mein sardi ke season se pehle hi cold cream aur winter products ka poora stock aa jaata hai",
  "Body lotion aur talcum powder bulk mein lete hain kyunki rate genuinely kam hain aur quality par kabhi doubt nahi hota",
  "Perfume aur deo section Shahab & Sons mein ekdum asli products se bhara rehta hai, refilled ya fake ka koi chance nahi",
  "Baby care products bhi Shahab & Sons mein milte hain, toh jo log family-oriented shop chalate hain unke liye bhi best hai",
  "Seasonal offers aur naye brand launches ke baare mein Shahab & Sons ke staff khud inform karte hain, yeh service kahin nahi milti"
];

const G_SERVICE = [
  "Shahab & Sons combines authentic original products with genuinely knowledgeable staff and that combination is rare and valuable in Varanasi",
  "The legacy of 70+ years at Shahab & Sons is entirely justified by the consistency of product quality and the reliability of their service",
  "The pricing at Shahab & Sons is transparent and competitive, giving honest margins to retail owners",
  "Shahab & Sons is the best wholesale cosmetic store in Hadha Sarai and the trust it has built locally is evident from the steady flow of customers from other districts",
  "The free packaging service at Shahab & Sons is something other wholesalers do not offer, they pack goods carefully without prompting",
  "For original, authentic cosmetics in Varanasi there is genuinely no store that matches Shahab & Sons for reliability",
  "Shahab & Sons treats every business owner as a long-term relationship rather than a transaction and the repeat business reflects that philosophy",
  "The owner has a deep understanding of the cosmetics business and ensures that new shop owners are protected from bad inventory decisions",
  "The consistent five-star reputation of Shahab & Sons is no accident, it is the result of decades of commitment to genuine products and honest trade",
  "Shahab & Sons mein staff kisi bhi question ka answer honestly dete hain, naye business walo ko poora support karte hain",
  "Shahab & Sons ka sabse bada quality yeh hai ki woh kabhi bhi kisi customer ko duplicate product nahi bechte, reputation unke liye sabse upar hai",
  "Every visit to Shahab & Sons reinforces why this store has survived and thrived for over seven decades in a competitive wholesale market",
  "The service culture at Shahab & Sons is built on honesty, patience, and a genuine desire to see their buyers succeed in their own businesses",
  "Shahab & Sons has earned the loyalty of shopkeepers from across eastern UP and Bihar by consistently delivering on every promise they make",
  "The way Shahab & Sons handles large bulk orders with the same care and attention as small purchases speaks to the professionalism of every staff member there",
  "Visiting Shahab & Sons feels like visiting a trusted advisor rather than a supplier, and that relationship is what makes their customers return for decades",
  "The after-purchase support at Shahab & Sons, including product exchange and market advice, is something no other wholesaler in Varanasi provides",
  "Shahab & Sons has a reputation in the Varanasi wholesale market that has taken 75 years to build and it shows in every single interaction",
  "The owner of Shahab & Sons personally ensures that product quality standards are never compromised regardless of market pressure or supply fluctuations",
  "Shopkeepers who buy from Shahab & Sons consistently report that their customer satisfaction levels improve because the product authenticity is immediately noticed",
  "Shahab & Sons ka store layout bhi bahut organized hai, jisse poore purchase mein time nahi lagta aur sab kuch smoothly milta rehta hai",
  "Inka after-sales support aur exchange policy dono genuinely customer-friendly hain, jo market mein rare hai aur Shahab & Sons ko alag banata hai",
  "Decades of trust built by Shahab & Sons in the cosmetics wholesale market of Varanasi is reflected in the fact that their regulars span three generations of shop owners",
  "The zero-tolerance policy on counterfeit products at Shahab & Sons has made them the most trusted name in cosmetics wholesale across the entire Purvanchal belt",
  "What makes Shahab & Sons truly exceptional is not just the products but the integrity with which every transaction is handled, every single time"
];

// Utility functions
function rnd() { return Math.random(); }
function pick(a) { return a[Math.floor(rnd() * a.length)]; }

function compose(cat) {
  var t = Math.floor(rnd() * 16);

  if (cat === 'wholesale') {
    if (t < 4)  return pick(W_OPENERS) + ". " + pick(W_DETAILS) + ". " + pick(G_SERVICE) + ".";
    if (t < 7)  return pick(W_OPENERS) + ". " + pick(W_HI) + ".";
    if (t < 10) return pick(W_HI) + ". " + pick(W_DETAILS) + ". " + pick(G_SERVICE) + ".";
    if (t < 13) return pick(W_OPENERS) + ". " + pick(G_SERVICE) + ".";
    return pick(W_DETAILS) + ". " + pick(G_SERVICE) + ". Best cosmetic wholesaler in Varanasi is definitely Shahab & Sons.";
  }
  if (cat === 'parlour') {
    if (t < 4)  return pick(P_OPENERS) + ". " + pick(P_DETAILS) + ". " + pick(G_SERVICE) + ".";
    if (t < 7)  return pick(P_OPENERS) + ". " + pick(P_HI) + ".";
    if (t < 10) return pick(P_HI) + ". " + pick(P_DETAILS) + ". " + pick(G_SERVICE) + ".";
    if (t < 13) return pick(P_OPENERS) + ". " + pick(G_SERVICE) + ".";
    return pick(P_DETAILS) + ". " + pick(G_SERVICE) + ". Beauty parlour setup ke liye Shahab & Sons is the only address.";
  }
  if (cat === 'fmcg') {
    if (t < 4)  return pick(F_OPENERS) + ". " + pick(F_DETAILS) + ". " + pick(G_SERVICE) + ".";
    if (t < 7)  return pick(F_OPENERS) + ". " + pick(F_HI) + ".";
    if (t < 10) return pick(F_HI) + ". " + pick(F_DETAILS) + ". " + pick(G_SERVICE) + ".";
    if (t < 13) return pick(F_OPENERS) + ". " + pick(G_SERVICE) + ".";
    return pick(F_DETAILS) + ". " + pick(G_SERVICE) + ". 100 percent original products at Shahab & Sons.";
  }

  // ALL / DEFAULT
  var roll = Math.floor(rnd() * 15);
  if (roll < 3)  return pick(W_OPENERS) + ". " + pick(W_DETAILS) + ". " + pick(G_SERVICE) + ".";
  if (roll < 5)  return pick(P_OPENERS) + ". " + pick(P_DETAILS) + ". " + pick(G_SERVICE) + ".";
  if (roll < 7)  return pick(F_OPENERS) + ". " + pick(F_DETAILS) + ". " + pick(G_SERVICE) + ".";
  if (roll < 9)  return pick(W_HI) + ". " + pick(G_SERVICE) + ".";
  if (roll < 11) return pick(P_HI) + ". " + pick(G_SERVICE) + ".";
  if (roll < 13) return pick(F_HI) + ". " + pick(G_SERVICE) + ".";
  return pick(G_SERVICE) + " " + pick(W_DETAILS) + ".";
}

// Vercel serverless handler
export default function handler(req, res) {
  // Accepted categories: 'wholesale', 'parlour', 'fmcg', or 'all' (default)
  const cat = req.query.cat || 'all';
  const generatedReview = compose(cat);
  res.status(200).json({ review: generatedReview });
}
