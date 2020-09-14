function navigationBarLoading() {
  const myNav = document.getElementById("nav_bar");
  const docFrag = document.createElement("nav");
  //1 Restaurants
  const btRestaurants = document.createElement("button");
  btRestaurants.textContent = "מסעדות";
  btRestaurants.addEventListener("click", btRestaurants1);
  docFrag.appendChild(btRestaurants);
  //2 Recipes
  const btRecipes = document.createElement("button");
  btRecipes.textContent = "מתכונים";
  btRecipes.addEventListener("click", btRecipes1);
  docFrag.appendChild(btRecipes);
  //3 equipment
  // const btEquipment = document.createElement("button");
  // btEquipment.textContent = "ציוד";
  // btEquipment.addEventListener("click", btEquipment1);
  // docFrag.appendChild(btEquipment);
  //4 Butchers
  const btButchers = document.createElement("button");
  btButchers.textContent = "אטליזים/ מקומות לקניית בשר";
  btButchers.addEventListener("click", btButchers1);
  docFrag.appendChild(btButchers);
  //5 Explanation_of_meats
  const btExplanation_of_meats = document.createElement("button");
  btExplanation_of_meats.textContent = "הסבר על בשרים";
  btExplanation_of_meats.addEventListener("click", btExplanation_of_meats1);
  docFrag.appendChild(btExplanation_of_meats);
  //6 Grillman_is_needed
  const btGrillman_is_needed = document.createElement("button");
  btGrillman_is_needed.textContent = "דרוש גרילמן";
  btGrillman_is_needed.addEventListener("click", btGrillman_is_needed1);
  docFrag.appendChild(btGrillman_is_needed);

  myNav.replaceWith(docFrag);
}
/*------------------------------------------------------------------------*/
//private functions
function createRestaurant(resObject) {
  const resDiv = document.createElement("div");
  resDiv.className = "restaurant_class";

  const resName = document.createElement("h4");
  resName.textContent = resObject.restaurantName;
  const resDesctiption = document.createElement("par");
  resDesctiption.textContent = resObject.restaurantDescription;
  const resRating = Rating(resObject.restaurantRating);

  const br = document.createElement("br");

  resDiv.appendChild(resName);
  resDiv.appendChild(resDesctiption);
  resDiv.appendChild(resRating);
  resDiv.appendChild(br);

  return resDiv;
}

function Rating(number = 2) {
  const rating = document.createElement("h5");
  rating.textContent = "דירוג המסעדה: ";
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("span");
    star.className = "star";
    if (i < number) star.className = "fa fa-star checked";
    else star.className = "fa fa-star";

    rating.appendChild(star);
  }
  return rating;
}
// ------------------------------------------------------
// Main buttons
// //1 restaurants
function Restaurant(name = "", des = "", rating = 5) {
  return (restaurant = {
    restaurantName: name,
    restaurantDescription: des,
    restaurantRating: rating,
  });
}

let des1 = `מסעדת לאגו – Lago – היוקרתית, שוכנת על שפת אגם בלב פארק שמיר שבמעלה אדומים. המקום נהנה מנוף מדברי מהפנט, מצמחייה יפה ומאווירה ייחודית,
שנגזרים ממיקומו המקורי ומהאוכל המוקפד המוגש בו, שמבטיח לסועדים ולמבלים במקום חוויה קולנארית יוצאת דופן.`;
let des2 = `"רק בשר" הוקמה בשנת 2008 ע"י דני ברנד - קיבוצניק וחקלאי, שחלם את הקונספט הייחודי כנגד כל עצות המומחים אך עם המון האהבה, מקצועיות  וכבוד לבשר.`;
let des3 = `במסעדה תוכלו להנות מבשרים העסיסיים והמשובחים שלנו אשר מיובאים היישר מארגנטינה.
  מבחר הבשרים הוא מצומצם ואיכותי והוא כולל בשרים כגון: אנטריקוט, אסאדו, נתחי שייטל ועוד אשר כולם מוכנים על גריל ארגנטינאי מקצועי.
  לצד הבשרים הנפלאים מוגשים במסעדה מבחר סלטים מרעננים בסגנון דרום אמריקאי, אמפנדס בקר טעימות ומבחר יינות משובחים..`;
let des4 = `"רובן" היא רשת מסעדות המבורגרים ובשרים מעושנים חמים באווירה ייחודית.
הרשת שמה לעצמה כמטרה את שדרוג טרנד ההמבורגריות בארץ וכיום מוגשים ברובן לצד
ההמבורגרים וכריכי רובן המפורסמים גם סטייקים, אסאדו, מנות ראשונות מיוחדות
וספיישלים מהמעשנה על בסיס יומי.`;
let des5 = `מסעדת אוכל רחוב עכשווי כשרה בלב ירושלים.
מסעדה בה הטעמים מדברים בעד עצמם - טעמים מדוייקים שילוו אתכם כשתלכו לישון בחלומות ויקומו אתכם בבוקר.
המסעדה שוכנת לאורכו של מדרחוב הלל (19) ומציעה חווית בילוי קלילה ונינוחה:
קבלת פנים חברית ומקצועית, מוזיקה מעולה ומעל לכל, מנות מוכרות ואהובות שפירקנו והרכבנו מחדש, כדי לאפשר לכם לגלות אותן מחדש - ממאכלים שתזהו מהילדות ועד למאכלי רחוב קלאסיים, כולם בגירסאות מודרניות ומפתיעות.`;

let restaurantArray = [];
restaurantArray.push(Restaurant("לאגו", des1, 4));
restaurantArray.push(Restaurant("רק בשר", des2, 5));
restaurantArray.push(Restaurant("פטגוניה", des3, 4));
restaurantArray.push(Restaurant("רובן", des4, 3));
restaurantArray.push(Restaurant("שפשוואן", des5, 5));

function btRestaurants1() {
  const br = document.createElement("br");

  const main = document.getElementById("main");
  const docFrag = document.createElement("div");

  const ScreenRes_div = document.createElement("div");
  ScreenRes_div.id = "background_div";
  const title = document.createElement("h3");
  title.textContent = "מסעדות";
  ScreenRes_div.appendChild(title);

  const search = document.createElement("input");
  search.style.fontSize = "16px";
  search.placeholder = "חיפוש מסעדה:";

  const btSearch = document.createElement("button");
  btSearch.textContent = "חפש";

  ScreenRes_div.appendChild(search);
  ScreenRes_div.appendChild(btSearch);
  ScreenRes_div.appendChild(br);

  for (let i = 0; i < restaurantArray.length; i++) {
    ScreenRes_div.appendChild(createRestaurant(restaurantArray[i]));
  }

  docFrag.appendChild(ScreenRes_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
//2 recipes
function btRecipes1() {
  const br = document.createElement("br");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");

  const main = document.getElementById("main");
  const docFrag = document.createElement("div");

  const btAddRecipe = document.createElement("button");
  btAddRecipe.textContent = "הוסף מתכון";
  btAddRecipe.addEventListener("click", btAddRecipe1);
  btAddRecipe.className = "rightSideButtons";
  docFrag.appendChild(btAddRecipe);
  docFrag.appendChild(br);

  const btViewRecipe = document.createElement("button");
  btViewRecipe.textContent = "הצג מתכונים";
  btViewRecipe.addEventListener("click", btViewRecipe1);
  btViewRecipe.className = "rightSideButtons";
  docFrag.appendChild(btViewRecipe);
  docFrag.appendChild(br1);

  const btSearchRecipe = document.createElement("button");
  btSearchRecipe.textContent = "חיפוש";
  btSearchRecipe.addEventListener("click", btSearchRecipe1);
  btSearchRecipe.className = "rightSideButtons";
  docFrag.appendChild(btSearchRecipe);
  docFrag.appendChild(br2);

  const ScreenRecipe_div = document.createElement("div");
  const title = document.createElement("h3");
  title.textContent = "מתכונים";
  ScreenRecipe_div.appendChild(title);

  const article = document.createElement("par");
  article.textContent = `מחכים לכם כאן מתכונים פשוטים עם נתחי בשר אנגוס ועוף מובחרים וטריים, וגם כתבות וטיפים לארוחה מלאה בטעמים בלתי נשכחים.
כאן תוכלו למצוא מתכונים עם בשר טחון, בשר בקר או תבשילי בשר, מתכוננים לארוחה מיוחדת לאירוח בשרי שיהפכו את הסעודה שלכם לחגיגית.
יש לכם חשק לתבשיל בשר בקדירה? או להקפצה מהירה במחבת? במתחם מתכוני הבשר שלנו תוכלו למצוא את מגוון האפשרויות וללמוד כיצד להכין את המתכונים האהובים עליכם
בצורה הטובה ביותר,כמו: מתכון צלעות אנגוס, מתכון כתף טרי אנגוס, מתכון סטייק אנגוס ומתכוני בשר מיוחדים`;
  ScreenRecipe_div.appendChild(article);
  ScreenRecipe_div.id = "background_div";
  docFrag.appendChild(ScreenRecipe_div);

  docFrag.id = "main";
  main.replaceWith(docFrag);
}
//3 equeipment
function btEquipment1() {
  const main = document.getElementById("main");
  const docFrag = document.createElement("div");

  const screenDiv = document.createElement("div");
  screenDiv.id = "background_div";
  const title = document.createElement("h3");
  title.textContent = "ציוד";
  screenDiv.appendChild(title);

  docFrag.appendChild(screenDiv);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
//4 butchers
function btButchers1() {
  const br = document.createElement("br");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");

  const main = document.getElementById("main");
  const docFrag = document.createElement("div");

  const ScreenButchers_div = document.createElement("div");
  ScreenButchers_div.id = "background_div";
  const title = document.createElement("h3");
  title.textContent = "אטליזים";
  ScreenButchers_div.appendChild(title);

  const search = document.createElement("input");
  search.style.fontSize = "16px";
  search.placeholder = "חיפוש אטליז:";

  const btSearch = document.createElement("button");
  btSearch.textContent = "חפש";

  const bucherName1 = document.createElement("h4");
  bucherName1.textContent = "-מרינדו-";
  const bucherDesc1 = document.createElement("par");
  bucherDesc1.textContent = `רועי תבור ואיתמר קנדליק אמנם מגיעים ממושב כנף שברמת הגולן, אבל משווקים את התוצרת שלהם בכל הארץ.
  נקודות מכירה שלהם תמצאו בסניפי ספייסס ביהוד ובתל-אביב. חלק מהבשר כבר מתובל וארוז בוואקום, ונותר רק להתחיל לצלות.
  יש פה שוק טלה בעשבי תיבול, רוסטביף לתנור, צלעות טלה פרוסות למחבת בתיבול צ'ילי, שום ודבש, אנטרקוט, סינטה במגוון מרינדות, קבבים, וסוגים שונים של בשר טחון. לצד הבשר יש גם דליקטסים ייחודיים, כגון צירי עגל וטלה`;

  const bucherName2 = document.createElement("h4");
  bucherName2.textContent = "-אטליז פרץ-";
  const bucherDesc2 = document.createElement("par");
  bucherDesc2.textContent = `לא נוצץ, לא מפונפן, לא מתוקשר – ובכל זאת, אטליז פרץ הוא מקום שכונתי, שבו תוכלו להשיג קציצות ביתיות, ירקרקות מרוב עשבי תיבול, קבבים טורקיים תוצרת בית, וגם נקניק סוג'וק יבש שמכינים בני משפחת פרץ.
  הבעלים משתייכים לשושלת קצבים מאיזמיר, טורקיה, וניכר בהם שהם גאים במלאכתם.`;

  const bucherName3 = document.createElement("h4");
  bucherName3.textContent = "-לגעת באוכל-";
  const bucherDesc3 = document.createElement("par");
  bucherDesc3.textContent = `את האנטרקוט מיישנים כאן כ‭21-‬ יום במקרר מיוחד, לדרגת יישון אופטימאלית. הנתח עטוף בשומן ומשויש היטב, ויש לו טעם בשרי יוצא דופן.
  135 שקל לקילו, והוא שלכם. חוץ מזה, יש פה מבחר נאה של נתחי בשר מיוחדים, בשרים מעושנים ודגים, וצוות של מומחי בשר שישמח לענות לכם על כל שאלה.`;

  ScreenButchers_div.appendChild(search);
  ScreenButchers_div.appendChild(btSearch);
  ScreenButchers_div.appendChild(br);
  ScreenButchers_div.appendChild(bucherName1);
  ScreenButchers_div.appendChild(bucherDesc1);
  ScreenButchers_div.appendChild(br1);
  ScreenButchers_div.appendChild(bucherName2);
  ScreenButchers_div.appendChild(bucherDesc2);
  ScreenButchers_div.appendChild(br2);
  ScreenButchers_div.appendChild(bucherName3);
  ScreenButchers_div.appendChild(bucherDesc3);

  docFrag.appendChild(ScreenButchers_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
//5 explenation of meats
function btExplanation_of_meats1() {
  const main = document.getElementById("main");
  const docFrag = document.createElement("div");

  const ScreenExp_div = document.createElement("div");
  ScreenExp_div.id = "background_div";
  const title = document.createElement("h3");
  title.textContent = "חלקי הפרה";
  ScreenExp_div.appendChild(title);

  const Explention = document.createElement("pre");
  Explention.style.paddingTop = "30px";
  //Explention.style.fontSize = "15px";

  Explention.textContent = ` בשר הבקר מתחלק באופן בסיסי לחלקים קדמיים ואחוריים, אך החלוקה החשובה ביותר היא על פי איכות הבשר ורכותו.

  כאן מבחינים בין החלקים " הפעילים " בגוף הבהמה , כמו שריר הזרוע, הכתף והצוואר,
  לבין החלקים "הנייחים" הרכים כמו שייטל, סינטה וכמובן הפילה.
  
  בשר מספר 1 - ורד הצלע אנטריקוט - לסטייקים ורוסטביף.
  בשר מספר 2  - צלעות - ריפען - לצלי , לנזיד , לבישול איטי ולטחינה.
  בשר מספר 3 - חזה - ברוסט - לצלי תנור וקדירה, לנזיד , למרק ולבשר כבוש.
  בשר מספר 4 - כתף מרכזי - כתף - לצלי קדירה, לנזיד ולטחינה.
  בשר מספר 5 - צלי כתף - צלי - לצלי קדירה ולבישול ברוטב.
  בשר מספר 6 - פילה מדומה - פאלש -  לצלי קדירה ולבישול ברוטב.
  בשר מספר 8 - שריר הזרוע - פולן-  לנזיד, למרק, לחמין ולאוסובוקו.
  בשר מספר 9 - קשתית - שפונדרה- לבישול איטי , לנזיד , למרק ולאסאדו
  בשר מספר 10 - צוואר - לנזיד , למרק ולטחינה.
  בשר מספר 11 - סינטה - מותן - לרוסטביף ולסטייקים.
  בשר מספר 12 - פילה - לסטייקים ולרוסטביף.
  בשר מספר 13 - שייטל - כנף העוקץ - לאסקלופ , לסטייקים , לשיפודים , ולרוסטביף.
  בשר מספר 14 - אווזית - קאצ'ה - לנזיד , לצלי קדירה ולטחינה.
  בשר מספר 15 - צ'אק- ירכה - לצלי קדירה.
  בשר מספר 16 - כף - לסטייקים , לאסקלופ ולצלי.
  בשר מספר 17 - פלדה - כסליים - לנזיד , לטחינה ולרולדה.
  בשר מספר 18 - שריר אחורי - פולי - לנזיד , למרק  ולבישול איטי.
  בשר מספר 19 - ויסבראטן - ראש ירכה - לצלי קדירה.`;

  const beefImage = document.createElement("img");
  beefImage.src = "./images/Beef.png";
  beefImage.style.position = "absolute";
  beefImage.style.left = "100px";
  beefImage.style.top = "170px";

  ScreenExp_div.appendChild(Explention);
  ScreenExp_div.appendChild(beefImage);
  docFrag.appendChild(ScreenExp_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
//6 grillman
function btGrillman_is_needed1() {
  const br = document.createElement("br");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");

  const main = document.getElementById("main");
  const docFrag = document.createElement("div");

  const screenDiv = document.createElement("div");
  screenDiv.id = "background_div";

  const openingStatement = document.createElement("pre");
  openingStatement.textContent = `בעמוד זה תוכלו למצוא גרילמנים לאירועים פרטיים,
לצפות ברשימת הגרילמנים הפרטיים המצויינים שלנו,ולבחור ע"פ דירוג.`;
  const btNewGrillman = document.createElement("button");
  btNewGrillman.textContent = "הוספת גרילמן";
  btNewGrillman.addEventListener("click", newGrillman);
  btNewGrillman.className = "rightSideButtons";
  docFrag.appendChild(btNewGrillman);
  docFrag.appendChild(br);

  const btGrillmanList = document.createElement("button");
  btGrillmanList.textContent = "רשימת גרילמנים";
  btGrillmanList.addEventListener("click", grillManList);
  btGrillmanList.className = "rightSideButtons";
  docFrag.appendChild(btGrillmanList);
  docFrag.appendChild(br1);

  const btNewEvent = document.createElement("button");
  btNewEvent.textContent = "יצירת איוונט";
  btNewEvent.addEventListener("click", newEvent);
  btNewEvent.className = "rightSideButtons";
  docFrag.appendChild(btNewEvent);
  docFrag.appendChild(br2);

  const title = document.createElement("h3");
  title.textContent = "גרילמן";
  screenDiv.appendChild(title);

  screenDiv.appendChild(title);
  screenDiv.appendChild(openingStatement);
  docFrag.appendChild(screenDiv);

  docFrag.id = "main";
  main.replaceWith(docFrag);
}
window.onload = writeMessage;
function writeMessage() {
  navigationBarLoading();
}

//---------------------------------------------
//1 Restaurants functions

//---------------------------------------------
function Recipe(name = "", ingred = "", prep = "", edName = "") {
  return (recipe = {
    recipeName: name,
    recipeIngredients: ingred,
    recipePrepration: prep,
    editorName: edName,
  });
}
let recipesArray = [];

//2 recipes functions
function createRecipe(recipeObject) {
  const resDiv = document.createElement("div");
  const br = document.createElement("br");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");

  resDiv.className = "recipe_class";

  const recName = document.createElement("h4");
  recName.textContent = recipeObject.recipeName;
  const ingredients = document.createElement("par");
  ingredients.textContent = "מצרכים:    " + recipeObject.recipeIngredients;
  const prepration = document.createElement("par");
  prepration.textContent = "אופן ההכנה:    " + recipeObject.recipePrepration;
  const editor = document.createElement("h5");
  editor.textContent = "עורך המתכון:    " + recipeObject.editorName;

  resDiv.appendChild(recName);
  resDiv.appendChild(ingredients);
  resDiv.appendChild(br);
  resDiv.appendChild(br1);
  resDiv.appendChild(prepration);
  resDiv.appendChild(editor);

  return resDiv;
}

function btAddRecipe1() {
  //Break line
  const br = document.createElement("br");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");
  const br4 = document.createElement("br");
  const br5 = document.createElement("br");
  const br6 = document.createElement("br");
  const br7 = document.createElement("br");

  const new_recipe = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  //Select
  const select = document.createElement("select");
  docFrag.textContent = "בחר קטגוריה: ";
  //Options
  const option = document.createElement("option");
  option.textContent = "אנטריקוט";
  select.appendChild(option);
  const option1 = document.createElement("option");
  option1.textContent = "סינטה";
  select.appendChild(option1);
  const option2 = document.createElement("option");
  option2.textContent = "אחר";
  select.appendChild(option2);

  //Recipe title
  const inputTitle = document.createElement("input");
  inputTitle.placeholder = "שם המתכון ";
  inputTitle.id = "inputTitle";
  //Ingredients text
  const div1 = document.createElement("div");
  div1.textContent = "מצרכים: ";
  const textArea1 = document.createElement("textarea");
  textArea1.rows = "4";
  textArea1.cols = "50";
  textArea1.style.alignContent = "center";
  textArea1.id = "textAreaIngredients";
  //Prepration text
  const div2 = document.createElement("div");
  div2.textContent = "אופן הכנה: ";
  const textArea2 = document.createElement("textarea");
  textArea2.rows = "4";
  textArea2.cols = "50";
  textArea2.style.alignContent = "center";
  textArea2.id = "textAreaPrepration";
  //Editor name
  const editorName = document.createElement("input");
  editorName.placeholder = "שם: ";
  editorName.id = "editorName";
  //save button
  const btSave = document.createElement("button");
  btSave.textContent = "שמור";
  btSave.id = "btSave";
  btSave.addEventListener("click", saveRecipe);
  //chef image
  const chefImage = document.createElement("img");
  chefImage.src = "./images/chafe.jpg";
  chefImage.className = "small_images";

  //Build the new frag
  docFrag.appendChild(select);
  docFrag.appendChild(br6);
  docFrag.appendChild(br7);
  docFrag.appendChild(inputTitle);
  docFrag.appendChild(br);
  docFrag.appendChild(br1);
  docFrag.appendChild(div1);
  docFrag.appendChild(textArea1);
  docFrag.appendChild(br2);
  docFrag.appendChild(br3);
  docFrag.appendChild(div2);
  docFrag.appendChild(textArea2);
  docFrag.appendChild(br4);
  docFrag.appendChild(br5);
  docFrag.appendChild(editorName);
  docFrag.appendChild(btSave);
  docFrag.appendChild(chefImage);

  docFrag.id = "background_div";
  new_recipe.replaceWith(docFrag);
}

function saveRecipe() {
  // inputTitle

  const main = document.getElementById("main");
  const docFrag = document.createElement("div");

  const inputTitle = document.getElementById("inputTitle").value;
  const textAreaIngredients = document.getElementById("textAreaIngredients")
    .value;
  const textAreaPrepration = document.getElementById("textAreaPrepration")
    .value;
  const editorName = document.getElementById("editorName").value;

  recipesArray.push(
    Recipe(inputTitle, textAreaIngredients, textAreaPrepration, editorName)
  );

  const background_div = document.getElementById("background_div");
  background_div.appendChild(
    createRecipe(recipesArray[recipesArray.length - 1])
  );

  docFrag.appendChild(background_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);

  // let recipe = {
  //   RecipeName: inputTitle.value,
  //   Ingredients: textAreaIngredients.value,
  //   Prepration: textAreaPrepration.value,
  //   Editor: editorName.value,
  // };

  // editorName.value = "";
  // inputTitle.value = "";
  // textAreaIngredients.value = "";
  // textAreaPrepration.value = "";
}

function btViewRecipe1() {
  alert("In view recipe");
}
function btSearchRecipe1() {
  alert("In Serarch recipe");
}
/*------------------------------------------------------------------------------*/
//Grillman functions
function newGrillman() {
  const br = document.createElement("br");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");
  const br4 = document.createElement("br");
  const br5 = document.createElement("br");
  const br6 = document.createElement("br");
  const br7 = document.createElement("br");

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");
  main.replaceWith(docFrag);

  const title = document.createElement("h3");
  title.textContent = "חלון הוספת גרילמן";
  docFrag.appendChild(title);
  docFrag.appendChild(br);

  //Grillman's details
  const inputFullName = document.createElement("input");
  inputFullName.placeholder = "שם מלא: ";
  inputFullName.id = "inputTitle";
  docFrag.appendChild(inputFullName);
  docFrag.appendChild(br1);
  docFrag.appendChild(br2);

  const inputPhoneNumber = document.createElement("input");
  inputPhoneNumber.placeholder = "מספר פלאפון: ";
  inputPhoneNumber.id = "inputTitle";
  docFrag.appendChild(inputPhoneNumber);
  docFrag.appendChild(br3);
  docFrag.appendChild(br4);

  //Addition data on grillman
  const div1 = document.createElement("div");
  div1.textContent = "פרט על עצמך: ";
  docFrag.appendChild(div1);

  const textArea1 = document.createElement("textarea");
  textArea1.placeholder = "ספר על הניסיון הקודם שלך, אירועים שעשית וכו'";
  textArea1.rows = "10";
  textArea1.cols = "70";
  textArea1.style.alignContent = "center";
  textArea1.id = "textArea";
  docFrag.appendChild(textArea1);
  docFrag.appendChild(br5);
  docFrag.appendChild(br6);

  const priceOneHour = document.createElement("input");
  priceOneHour.placeholder = "מחיר לשעת עבודה";
  docFrag.appendChild(priceOneHour);
  docFrag.appendChild(br7);

  //save button
  const btSave = document.createElement("button");
  btSave.style.position = "absolute";
  btSave.style.right = "50%";
  btSave.style.top = "90%";
  btSave.textContent = "שמור";
  btSave.id = "btSave";
  btSave.addEventListener("click", saveNewGrillman);
  docFrag.appendChild(btSave);

  //grillman image
  const grillmanImage = document.createElement("img");
  grillmanImage.src = "./images/grillman.jpg";
  grillmanImage.className = "small_images";
  docFrag.appendChild(grillmanImage);

  docFrag.id = "background_div";
}
function grillManList() {
  alert("In grillManList");
}
function newEvent() {
  const br = document.createElement("br");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");
  const br4 = document.createElement("br");
  const br5 = document.createElement("br");
  const br6 = document.createElement("br");
  const br7 = document.createElement("br");
  const br8 = document.createElement("br");
  const br9 = document.createElement("br");

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");
  docFrag.id = "background_div";

  const title = document.createElement("h3");
  title.textContent = "יצירת אירוע חדש";
  docFrag.appendChild(title);
  docFrag.appendChild(br);

  //Event's owner details
  const inputFullName = document.createElement("input");
  inputFullName.placeholder = "שם מלא: ";
  inputFullName.id = "inputTitle";
  docFrag.appendChild(inputFullName);
  docFrag.appendChild(br1);
  docFrag.appendChild(br2);

  const inputPhoneNumber = document.createElement("input");
  inputPhoneNumber.placeholder = "מספר פלאפון: ";
  inputPhoneNumber.id = "inputTitle";
  docFrag.appendChild(inputPhoneNumber);
  docFrag.appendChild(br3);
  docFrag.appendChild(br4);

  //Event's details
  const participantAmount = document.createElement("input");
  participantAmount.placeholder = "מספר משתתפים: ";
  docFrag.appendChild(participantAmount);
  docFrag.appendChild(br5);
  docFrag.appendChild(br6);

  const location = document.createElement("input");
  location.placeholder = "איזור: ";
  docFrag.appendChild(location);
  docFrag.appendChild(br7);
  docFrag.appendChild(br8);

  const lable = document.createElement("h5");
  lable.textContent = "הבשר עלינו";
  docFrag.appendChild(lable);
  const buyTheFood = document.createElement("input");
  buyTheFood.setAttribute("type", "checkbox");
  docFrag.appendChild(buyTheFood);
  docFrag.appendChild(br9);

  const textArea1 = document.createElement("textarea");
  textArea1.placeholder = "בקשות מיוחדות / מידע נוסף על האירוע: ";
  textArea1.rows = "10";
  textArea1.cols = "70";
  textArea1.style.alignContent = "center";
  textArea1.id = "textArea";
  docFrag.appendChild(textArea1);

  //save button
  const btSave = document.createElement("button");
  btSave.style.position = "absolute";
  btSave.style.right = "50%";
  btSave.style.top = "90%";
  btSave.textContent = "שמור";
  btSave.id = "btSave";
  btSave.addEventListener("click", saveNewEvent);
  docFrag.appendChild(btSave);

  //beef image
  const beefEventImage = document.createElement("img");
  beefEventImage.src = "./images/beef_event.jpg";
  beefEventImage.style.position = "absolute";
  beefEventImage.style.left = "70px";
  beefEventImage.style.top = "70px";
  docFrag.appendChild(beefEventImage);

  main.replaceWith(docFrag);
}
function saveNewGrillman() {
  alert("In saveNewGrillman");
}
function saveNewEvent() {
  alert("In saveNewEvent");
}
