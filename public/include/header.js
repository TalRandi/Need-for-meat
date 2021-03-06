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
  //4 Butchers
  const btButchers = document.createElement("button");
  btButchers.textContent = "אטליזים/ מקומות לקניית בשר";
  btButchers.addEventListener("click", btButchers1);
  docFrag.appendChild(btButchers);
  //5 Grillman_is_needed
  const btGrillman_is_needed = document.createElement("button");
  btGrillman_is_needed.textContent = "דרוש גרילמן";
  btGrillman_is_needed.addEventListener("click", btGrillman_is_needed1);
  docFrag.appendChild(btGrillman_is_needed);
  //6 Explanation_of_meats
  const btExplanation_of_meats = document.createElement("button");
  btExplanation_of_meats.textContent = "הסבר על בשרים";
  btExplanation_of_meats.addEventListener("click", btExplanation_of_meats1);
  docFrag.appendChild(btExplanation_of_meats);

  myNav.replaceWith(docFrag);
  //firebase
  fireBase();
}
/*------------------------------------------------------------------------*/
//private functions
function createRestaurant(resObject) {
  const resDiv = document.createElement("div");
  resDiv.className = "restaurant_class";

  const resName = document.createElement("h2");
  resName.className = "butcherRestaurantRecipe";
  resName.textContent = resObject.restaurantName;
  const resDesctiption = document.createElement("div");
  resDesctiption.className = "description";
  resDesctiption.textContent = resObject.restaurantDescription;
  const resRating = Rating(resObject.restaurantRating);

  const kosher = document.createElement("h2");
  if (resObject.restaurantKosher) kosher.textContent = "כשר";
  else kosher.textContent = "לא כשר";

  const location = document.createElement("i");
  location.className = "material-icons";
  if (resObject.restaurantLocation != "")
    location.textContent = resObject.restaurantLocation + "place";
  else location.textContent = "לא צוין מיקום";

  const divideLine = document.createElement("hr");
  divideLine.className = "solid";

  const br = document.createElement("br");

  resDiv.appendChild(resName);
  resDiv.appendChild(resDesctiption);
  resDiv.appendChild(resRating);
  resDiv.appendChild(kosher);
  resDiv.appendChild(location);
  if (resObject != restaurantArray[restaurantArray.length - 1])
    resDiv.appendChild(divideLine);

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
function Restaurant(
  name = "",
  des = "",
  rating = 5,
  kosher = true,
  location = ""
) {
  return (restaurant = {
    restaurantName: name,
    restaurantDescription: des,
    restaurantRating: rating,
    restaurantKosher: kosher,
    restaurantLocation: location,
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

let des6 = `מסעדת בני הדייג בתל אביב מגישה בשרים, דגים ופירות ים. 
בני הדייג בתל אביב (יורדי הסירה, נמל תל אביב) נגיש לנכים, פתוח בשבת וניתן לקיים במקום כנסים ואירועים.`;

let restaurantArray = [];

restaurantArray.push(Restaurant("לאגו", des1, 4, true, "מעלה אדומים"));
restaurantArray.push(Restaurant("רק בשר", des2, 5, true, "ראשון לציון"));
restaurantArray.push(Restaurant("פטגוניה", des3, 4, true));
restaurantArray.push(Restaurant("רובן", des4, 3, true));
restaurantArray.push(Restaurant("שפשוואן", des5, 5));
restaurantArray.push(Restaurant("בני הדייג", des6, 4, false, "תל אביב"));

function btRestaurants1() {
  const br = document.createElement("br");
  const br1 = document.createElement("br");

  const main = document.getElementById("main");
  const docFrag = document.createElement("div");
  const homepage_div = document.getElementById("homepage-div");
  if(homepage_div)
    homepage_div.parentNode.removeChild(homepage_div);

  const btAddRestaurant = document.createElement("button");
  btAddRestaurant.textContent = "הוסף מסעדה";
  btAddRestaurant.className = "rightSideButtons";
  btAddRestaurant.addEventListener("click", addRestaurant);
  docFrag.appendChild(btAddRestaurant);
  docFrag.appendChild(br1);

  const btViewRestaurant = document.createElement("button");
  btViewRestaurant.textContent = "רשימת המסעדות";
  btViewRestaurant.className = "rightSideButtons";
  btViewRestaurant.addEventListener("click", viewRestaurant);
  docFrag.appendChild(btViewRestaurant);

  const ScreenRes_div = document.createElement("div");
  ScreenRes_div.id = "background_div";

  const title = document.createElement("h1");
  title.textContent = "מסעדות";
  ScreenRes_div.appendChild(title);

  const article = document.createElement("div");
  article.className = "par";
  article.textContent = `בעמוד זה תוכלו לצפות ברשימת מסעדות הבשרים המובלות והמעולות שהאתר מציג,
תוכלו להוסיף מסעדות בעצמכם ולאפשר לשאר משתמשי האתר להנות ולהכיר מסעדות חדשות.
המסעדות מדורגות לפי 1-5 כוכבים.
מחפשים מסעדה מומלצת? כאן תוכלו למצוא מגוון רחב של מסעדות בכל האזורים, מכל הסוגים והסגנונות.`;

  ScreenRes_div.appendChild(article);

  docFrag.appendChild(ScreenRes_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
function addRestaurant() {
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

  const new_restaurant = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = "הוספת מסעדה";
  docFrag.appendChild(title);

  //Restaurant name
  const inputTitle = document.createElement("input");
  inputTitle.placeholder = "שם המסעדה: ";
  inputTitle.id = "restaurantTitle";
  docFrag.appendChild(br);
  docFrag.appendChild(br1);
  docFrag.appendChild(inputTitle);

  //Restaurant description
  const restaurantDescription = document.createElement("textarea");
  restaurantDescription.placeholder = "תיאור: ";
  restaurantDescription.id = "textAreaRestaurant";
  docFrag.appendChild(br2);
  docFrag.appendChild(br3);
  docFrag.appendChild(restaurantDescription);

  //Restaurant location
  const restaurantRating = document.createElement("input");
  restaurantRating.placeholder = "דירוג (1-5)";
  restaurantRating.id = "restaurantRating";
  docFrag.appendChild(br4);
  docFrag.appendChild(br5);
  docFrag.appendChild(restaurantRating);

  //Restaurant location
  const restaurantLocation = document.createElement("input");
  restaurantLocation.placeholder = "מיקום: ";
  restaurantLocation.id = "restaurantLocation";
  docFrag.appendChild(br6);
  docFrag.appendChild(br7);
  docFrag.appendChild(restaurantLocation);

  //Restaurant Kosher
  const restaurantKosher = document.createElement("input");
  restaurantKosher.placeholder = "כשר/לא כשר";
  restaurantKosher.id = "restaurantKosher";
  docFrag.appendChild(br8);
  docFrag.appendChild(br9);
  docFrag.appendChild(restaurantKosher);

  //save button
  const btSave = document.createElement("button");
  btSave.textContent = "שמור";
  btSave.id = "btSave";
  btSave.style.position = "absolute";
  btSave.style.right = "50%";
  btSave.style.top = "90%";
  btSave.addEventListener("click", saveRestaurant);
  docFrag.appendChild(btSave);

  //restaurant image
  const grillmanImage = document.createElement("img");
  grillmanImage.src = "./images/restaurantImg.jpg";
  grillmanImage.className = "small_images";
  docFrag.appendChild(grillmanImage);

  docFrag.id = "background_div";
  new_restaurant.replaceWith(docFrag);
}
function saveRestaurant() {
  const docFrag1 = document.getElementById("background_div");

  const restaurantTitle = document.getElementById("restaurantTitle").value;
  const restaurantDes = document.getElementById("textAreaRestaurant").value;
  const restaurantRat = document.getElementById("restaurantRating").value;
  const restaurantLoc = document.getElementById("restaurantLocation").value;
  const restaurantKosh = document.getElementById("restaurantKosher").value;

  if (
    restaurantTitle == "" ||
    restaurantDes == "" ||
    restaurantRat == "" ||
    restaurantLoc == "" ||
    restaurantKosh == ""
  ) {
    alert("חובה למלא את כל השדות");
    return;
  }
  let r1 = Restaurant(
    restaurantTitle,
    restaurantDes,
    restaurantRat,
    restaurantKosh,
    restaurantLoc
  );
  restaurantArray.push(r1);

  //send to fire base
  sendRestauranToFireBase(r1);

  document.getElementById("restaurantTitle").value = "";
  document.getElementById("textAreaRestaurant").value = "";
  document.getElementById("restaurantRating").value = "";
  document.getElementById("restaurantLocation").value = "";
  document.getElementById("restaurantKosher").value = "";
}

function viewRestaurant() {
  const br = document.createElement("br");

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const ScreenRestaurant_div = document.createElement("div");
  ScreenRestaurant_div.id = "background_div";
  const title = document.createElement("h1");
  title.textContent = "מסעדות";
  ScreenRestaurant_div.appendChild(title);

  const search = document.createElement("input");
  search.id = "searchRestaurant";
  search.style.fontSize = "16px";
  search.placeholder = "חיפוש מסעדה: ";

  const btSearch = document.createElement("button");
  btSearch.textContent = "חפש";
  btSearch.addEventListener("click", searchRestaurant);

  ScreenRestaurant_div.appendChild(search);
  ScreenRestaurant_div.appendChild(btSearch);
  ScreenRestaurant_div.appendChild(br);
  if (restaurantArray.length != 0) {
    const divideLine = document.createElement("hr");
    divideLine.style.borderStyle = "solid double";
    divideLine.style.borderWidth = "medium";
    divideLine.style.backgroundColor = "black";
    ScreenRestaurant_div.appendChild(divideLine);
  }
  for (let i = 0; i < restaurantArray.length; i++)
    ScreenRestaurant_div.appendChild(createRestaurant(restaurantArray[i]));

  docFrag.appendChild(ScreenRestaurant_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}

function searchRestaurant() {
  const searchRestaurant = document.getElementById("searchRestaurant");
  let resName = searchRestaurant.value;
  let result = [];
  for (let i = 0; i < restaurantArray.length; i++) {
    if (restaurantArray[i].restaurantName === resName)
      result.push(restaurantArray[i]);
  }

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const ScreenRestaurant_div = document.createElement("div");
  ScreenRestaurant_div.id = "background_div";
  const title = document.createElement("h1");

  if (result.length != 0) {
    title.textContent = "תוצאות חיפוש";
    ScreenRestaurant_div.appendChild(title);
    const divideLine = document.createElement("hr");
    divideLine.style.borderStyle = "solid double";
    divideLine.style.borderWidth = "medium";
    divideLine.style.backgroundColor = "black";
    ScreenRestaurant_div.appendChild(divideLine);
    for (let i = 0; i < result.length; i++)
      ScreenRestaurant_div.appendChild(createRestaurant(result[i]));
  } else {
    title.textContent = "לא נמצאו מסעדות";
    ScreenRestaurant_div.appendChild(title);
  }

  docFrag.appendChild(ScreenRestaurant_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}

//2 recipes
function btRecipes1() {
  const br = document.createElement("br");
  const br1 = document.createElement("br");

  const main = document.getElementById("main");
  const docFrag = document.createElement("div");
  const homepage_div = document.getElementById("homepage-div");
  if(homepage_div)
    homepage_div.parentNode.removeChild(homepage_div);

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

  const ScreenRecipe_div = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "מתכונים";
  ScreenRecipe_div.appendChild(title);

  const article = document.createElement("div");
  article.className = "par";
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
//4 butchers
function Butcher(name = "", description = "", location = "", kosher = true) {
  return (butcher = {
    butcherName: name,
    butcherDescription: description,
    butcherLocation: location,
    butcherKosher: kosher,
  });
}

let butchersArray = [];

//butchers functions
function createButcher(butcherObject) {
  const butchDiv = document.createElement("div");

  butchDiv.className = "butcher_class";

  const butcherName = document.createElement("h2");
  butcherName.className = "butcherRestaurantRecipe";
  butcherName.textContent = "שם האטליז:    " + butcherObject.butcherName;
  const descriptionTitle = document.createElement("h3");
  descriptionTitle.textContent = "תיאור: ";
  const description = document.createElement("div");
  description.className = "description";
  description.textContent = butcherObject.butcherDescription;

  const location = document.createElement("i");
  location.className = "material-icons";
  if (butcherObject.butcherLocation != "")
    location.textContent = butcherObject.butcherLocation + "place";
  else location.textContent = "לא צוין מיקום";

  const kosher = document.createElement("h2");
  if (butcherObject.butcherKosher) kosher.textContent = "כשר";
  else kosher.textContent = "לא כשר";

  const divideLine = document.createElement("hr");
  divideLine.className = "solid";

  butchDiv.appendChild(butcherName);
  butchDiv.appendChild(descriptionTitle);
  butchDiv.appendChild(description);
  butchDiv.appendChild(kosher);
  butchDiv.appendChild(location);
  if (butcherObject != butchersArray[butchersArray.length - 1])
    butchDiv.appendChild(divideLine);

  return butchDiv;
}
function btButchers1() {
  const br = document.createElement("br");
  const br1 = document.createElement("br");

  const main = document.getElementById("main");
  const docFrag = document.createElement("div");
  const homepage_div = document.getElementById("homepage-div");
  if(homepage_div)
    homepage_div.parentNode.removeChild(homepage_div);

  const btAddButcher = document.createElement("button");
  btAddButcher.textContent = "הוסף אטליז";
  btAddButcher.className = "rightSideButtons";
  btAddButcher.addEventListener("click", addButcher);
  docFrag.appendChild(btAddButcher);
  docFrag.appendChild(br);

  const btViewButchers = document.createElement("button");
  btViewButchers.textContent = "הצג אטליזים";
  btViewButchers.addEventListener("click", viewButchers);
  btViewButchers.className = "rightSideButtons";
  docFrag.appendChild(btViewButchers);
  docFrag.appendChild(br1);

  const ScreenButchers_div = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "אטליזים";
  ScreenButchers_div.appendChild(title);

  const article = document.createElement("div");
  article.className = "par";
  article.textContent = `בעמוד זה תוכלו להנות ממגוון עשיר של אוסף האטליזים שלנו.
תוכלו גם להוסיף את האטליז המועדף עליכם לרשימת האטליזים באתר.`;
  ScreenButchers_div.appendChild(article);
  ScreenButchers_div.id = "background_div";
  docFrag.appendChild(ScreenButchers_div);

  docFrag.id = "main";
  main.replaceWith(docFrag);
}
function addButcher() {
  const br = document.createElement("br");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");
  const br4 = document.createElement("br");
  const br5 = document.createElement("br");
  const br6 = document.createElement("br");
  const br7 = document.createElement("br");

  const new_butcher = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = "הוספת אטליז";
  docFrag.appendChild(title);

  //Butcher name
  const inputTitle = document.createElement("input");
  inputTitle.placeholder = "שם האטליז: ";
  inputTitle.id = "inputTitleButcher";

  //Butcher description
  const textArea = document.createElement("textarea");
  textArea.placeholder = "תיאור: ";
  textArea.id = "textAreaButcher";

  //Butcher location
  const butcherLocation = document.createElement("input");
  butcherLocation.placeholder = "מיקום: ";
  butcherLocation.id = "butcherLocation";

  //Butcher Kosher
  const butcherKosher = document.createElement("input");
  butcherKosher.placeholder = "כשר/לא כשר";
  butcherKosher.id = "butcherKosher";

  //save button
  const btSave = document.createElement("button");
  btSave.textContent = "שמור";
  btSave.id = "btSave";
  btSave.style.position = "absolute";
  btSave.style.right = "50%";
  btSave.style.top = "90%";
  btSave.addEventListener("click", saveButcher);

  //butcher image
  const grillmanImage = document.createElement("img");
  grillmanImage.src = "./images/butcherImg.jpg";
  grillmanImage.className = "small_images";
  docFrag.appendChild(grillmanImage);

  docFrag.appendChild(br);
  docFrag.appendChild(br1);
  docFrag.appendChild(inputTitle);
  docFrag.appendChild(br2);
  docFrag.appendChild(br3);
  docFrag.appendChild(textArea);
  docFrag.appendChild(br4);
  docFrag.appendChild(br5);
  docFrag.appendChild(butcherLocation);
  docFrag.appendChild(br6);
  docFrag.appendChild(br7);
  docFrag.appendChild(butcherKosher);
  docFrag.appendChild(btSave);

  docFrag.id = "background_div";
  new_butcher.replaceWith(docFrag);
}
function viewButchers() {
  const br = document.createElement("br");

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const ScreenButcher_div = document.createElement("div");
  ScreenButcher_div.id = "background_div";
  const title = document.createElement("h1");
  title.textContent = "אטליזים";
  ScreenButcher_div.appendChild(title);

  const search = document.createElement("input");
  search.id = "searchButcher";
  search.style.fontSize = "16px";
  search.placeholder = "חיפוש אטליז";

  const btSearch = document.createElement("button");
  btSearch.addEventListener("click", searchBucher);
  btSearch.textContent = "חפש";

  ScreenButcher_div.appendChild(search);
  ScreenButcher_div.appendChild(btSearch);
  ScreenButcher_div.appendChild(br);
  if (butchersArray.length != 0) {
    const divideLine = document.createElement("hr");
    divideLine.style.borderStyle = "solid double";
    divideLine.style.borderWidth = "medium";
    divideLine.style.backgroundColor = "black";
    ScreenButcher_div.appendChild(divideLine);
  }

  for (let i = 0; i < butchersArray.length; i++) {
    // console.log(butchersArray[i]);
    ScreenButcher_div.appendChild(createButcher(butchersArray[i]));
  }

  docFrag.appendChild(ScreenButcher_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
function searchBucher() {
  const searchButcher = document.getElementById("searchButcher");
  let resName = searchButcher.value;
  let result = [];
  for (let i = 0; i < butchersArray.length; i++) {
    if (butchersArray[i].butcherName === resName) result.push(butchersArray[i]);
  }

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const ScreenButcher_div = document.createElement("div");
  ScreenButcher_div.id = "background_div";
  const title = document.createElement("h1");

  if (result.length != 0) {
    title.textContent = "תוצאות חיפוש";
    ScreenButcher_div.appendChild(title);
    const divideLine = document.createElement("hr");
    divideLine.style.borderStyle = "solid double";
    divideLine.style.borderWidth = "medium";
    divideLine.style.backgroundColor = "black";
    ScreenButcher_div.appendChild(divideLine);
    for (let i = 0; i < result.length; i++)
      ScreenButcher_div.appendChild(createButcher(result[i]));
  } else {
    title.textContent = "לא נמצאו אטליזים";
    ScreenButcher_div.appendChild(title);
  }

  docFrag.appendChild(ScreenButcher_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
function saveButcher() {
  const inputTitleButcher = document.getElementById("inputTitleButcher").value;
  const butchDescription = document.getElementById("textAreaButcher").value;
  const butcherLocation = document.getElementById("butcherLocation").value;
  const butcherKosher = document.getElementById("butcherKosher").value;

  if (
    inputTitleButcher == "" ||
    butchDescription == "" ||
    butcherLocation == "" ||
    butcherKosher == ""
  ) {
    alert("חובה למלא את כל השדות");
    return;
  }
  let b1 = Butcher(
    inputTitleButcher,
    butchDescription,
    butcherLocation,
    butcherKosher
  );
  butchersArray.push(b1);
  // send new Buthcer to fire base
  sendButcherToFireBase(b1);

  document.getElementById("inputTitleButcher").value = "";
  document.getElementById("textAreaButcher").value = "";
  document.getElementById("butcherLocation").value = "";
  document.getElementById("butcherKosher").value = "";
}
//5 explenation of meats
function btExplanation_of_meats1() {
  const main = document.getElementById("main");
  const docFrag = document.createElement("div");
  // const br = document.createElement("br");
  // const br1 = document.createElement("br");

  const ScreenExp_div = document.createElement("div");
  ScreenExp_div.id = "background_div";
  const title = document.createElement("h1");
  title.textContent = "חלקי הפרה";
  ScreenExp_div.appendChild(title);
  // ScreenExp_div.appendChild(br);

  const ScreenInside_div = document.createElement("div");
  ScreenInside_div.style.display = "flex";
  ScreenInside_div.style.flexWrap = "wrap";
  const Explention = document.createElement("pre");

  Explention.textContent = `בשר הבקר מתחלק באופן בסיסי לחלקים קדמיים ואחוריים, אך החלוקה החשובה ביותר היא על פי איכות הבשר ורכותו.
  
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
  beefImage.style.width = "450px";
  beefImage.style.height = "400px";
  beefImage.style.paddingTop = "70px";

  ScreenInside_div.appendChild(Explention);
  ScreenInside_div.appendChild(beefImage);
  ScreenExp_div.appendChild(ScreenInside_div);
  docFrag.appendChild(ScreenExp_div);

  docFrag.id = "main";
  main.replaceWith(docFrag);
}
//6 grillman
function btGrillman_is_needed1() {
  const br = document.createElement("br");
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");

  const main = document.getElementById("main");
  const docFrag = document.createElement("div");
  const homepage_div = document.getElementById("homepage-div");
  if(homepage_div)
    homepage_div.parentNode.removeChild(homepage_div);

  const screenDiv = document.createElement("div");
  screenDiv.id = "background_div";

  const openingStatement = document.createElement("div");
  openingStatement.className = "par";
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

  const btEventList = document.createElement("button");
  btEventList.textContent = "רשימת איוונטים";
  btEventList.addEventListener("click", eventList);
  btEventList.className = "rightSideButtons";
  docFrag.appendChild(btEventList);
  docFrag.appendChild(br3);

  const title = document.createElement("h1");
  title.textContent = "גרילמן";
  screenDiv.appendChild(title);

  screenDiv.appendChild(title);
  screenDiv.appendChild(openingStatement);
  docFrag.appendChild(screenDiv);

  docFrag.id = "main";
  main.replaceWith(docFrag);
}

function displayNextImage() {
  document.getElementById("img").style.backgroundImage =
    "url(" + images[x] + ")";
  x++;

  //delay
  var delayInMilliseconds = 4000; //4 second
  setTimeout(function () {
    displayNextImage();

    if (x == images.length) x = 0;
  }, delayInMilliseconds);
}

let images = [];
let x = 0;
window.onload = writeMessage;
function writeMessage() {
  images[0] = "./images/homepage_high3.jpg";
  images[1] = "./images/homepage_high2.jpg";
  images[2] = "./images/homepage_high.jpg";

  displayNextImage();
  navigationBarLoading();
}

//---------------------------------------------recipe functions
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

  const recName = document.createElement("h2");
  recName.className = "butcherRestaurantRecipe";
  recName.textContent = recipeObject.recipeName;
  const ingredientsTitle = document.createElement("h4");
  ingredientsTitle.textContent = "מצרכים: ";
  const ingredients = document.createElement("pre");
  ingredients.textContent = recipeObject.recipeIngredients;
  const preprationTitle = document.createElement("h4");
  preprationTitle.textContent = "אופן ההכנה: ";
  const prepration = document.createElement("pre");
  prepration.textContent = recipeObject.recipePrepration;
  const editor = document.createElement("h5");
  editor.textContent = "עורך המתכון:    " + recipeObject.editorName;

  const divideLine = document.createElement("hr");
  divideLine.className = "solid";

  resDiv.appendChild(recName);
  resDiv.appendChild(ingredientsTitle);
  resDiv.appendChild(ingredients);
  resDiv.appendChild(br);
  resDiv.appendChild(br1);
  resDiv.appendChild(preprationTitle);
  resDiv.appendChild(prepration);
  resDiv.appendChild(editor);
  if (recipeObject != recipesArray[recipesArray.length - 1])
    resDiv.appendChild(divideLine);

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

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const title = document.createElement("h3");
  title.textContent = "הוספת מתכון";
  docFrag.appendChild(title);

  //Recipe title
  const inputTitle = document.createElement("input");
  inputTitle.placeholder = "שם המתכון: ";
  inputTitle.id = "inputTitle";
  docFrag.appendChild(br6);
  docFrag.appendChild(br7);
  docFrag.appendChild(inputTitle);
  //Ingredients text
  const div1 = document.createElement("div");
  div1.textContent = "מצרכים: ";
  docFrag.appendChild(br);
  docFrag.appendChild(br1);
  docFrag.appendChild(div1);

  const textArea1 = document.createElement("textarea");
  textArea1.id = "textAreaIngredients";
  docFrag.appendChild(textArea1);
  docFrag.appendChild(br2);
  docFrag.appendChild(br3);
  //Prepration text
  const div2 = document.createElement("div");
  div2.textContent = "אופן הכנה: ";
  const textArea2 = document.createElement("textarea");
  textArea2.id = "textAreaPrepration";
  docFrag.appendChild(div2);
  docFrag.appendChild(textArea2);
  docFrag.appendChild(br4);
  docFrag.appendChild(br5);
  //Editor name
  const editorName = document.createElement("input");
  editorName.placeholder = "שם: ";
  editorName.id = "editorName";
  docFrag.appendChild(editorName);
  //save button
  const btSave = document.createElement("button");
  btSave.textContent = "שמור";
  btSave.id = "btSave";
  btSave.addEventListener("click", saveRecipe);
  docFrag.appendChild(btSave);
  //chef image
  const chefImage = document.createElement("img");
  chefImage.src = "./images/chafe.jpg";
  chefImage.className = "small_images";
  docFrag.appendChild(chefImage);
  docFrag.id = "background_div";
  main.replaceWith(docFrag);
}

function saveRecipe() {
  // inputTitle

  const docFrag1 = document.getElementById("background_div");

  const inputTitle = document.getElementById("inputTitle").value;
  const textAreaIngredients = document.getElementById("textAreaIngredients")
    .value;
  const textAreaPrepration = document.getElementById("textAreaPrepration")
    .value;
  const editorName = document.getElementById("editorName").value;

  if (
    inputTitle == "" ||
    textAreaIngredients == "" ||
    textAreaPrepration == "" ||
    editorName == ""
  ) {
    alert("חובה למלא את כל השדות");
    return;
  }
  let r1 = Recipe(
    inputTitle,
    textAreaIngredients,
    textAreaPrepration,
    editorName
  );

  recipesArray.push(r1);
  //send recipe to fb
  sendRecipeToFireBase(r1);

  document.getElementById("inputTitle").value = "";
  document.getElementById("textAreaIngredients").value = "";
  document.getElementById("textAreaPrepration").value = "";
  document.getElementById("editorName").value = "";
}

function btViewRecipe1() {
  const br = document.createElement("br");

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const ScreenRecipe_div = document.createElement("div");
  ScreenRecipe_div.id = "background_div";
  const title = document.createElement("h1");
  title.textContent = "מתכונים";
  ScreenRecipe_div.appendChild(title);

  const search = document.createElement("input");
  search.id = "searchRecipe";
  search.style.fontSize = "16px";
  search.placeholder = "חיפוש מתכון:";

  const btSearch = document.createElement("button");
  btSearch.textContent = "חפש";
  btSearch.addEventListener("click", searchRecipe);

  ScreenRecipe_div.appendChild(search);
  ScreenRecipe_div.appendChild(btSearch);
  ScreenRecipe_div.appendChild(br);
  if (recipesArray.length != 0) {
    const divideLine = document.createElement("hr");
    divideLine.style.borderStyle = "solid double";
    divideLine.style.borderWidth = "medium";
    divideLine.style.backgroundColor = "black";
    ScreenRecipe_div.appendChild(divideLine);
  }

  for (let i = 0; i < recipesArray.length; i++)
    ScreenRecipe_div.appendChild(createRecipe(recipesArray[i]));

  docFrag.appendChild(ScreenRecipe_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
function searchRecipe() {
  const searchRecipe = document.getElementById("searchRecipe");
  let resName = searchRecipe.value;
  let result = [];
  for (let i = 0; i < recipesArray.length; i++) {
    if (recipesArray[i].recipeName === resName) result.push(recipesArray[i]);
  }

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const ScreenRecipe_div = document.createElement("div");
  ScreenRecipe_div.id = "background_div";
  const title = document.createElement("h1");

  if (result.length != 0) {
    title.textContent = "תוצאות חיפוש";
    ScreenRecipe_div.appendChild(title);
    const divideLine = document.createElement("hr");
    divideLine.style.borderStyle = "solid double";
    divideLine.style.borderWidth = "medium";
    divideLine.style.backgroundColor = "black";
    ScreenRecipe_div.appendChild(divideLine);
    for (let i = 0; i < result.length; i++)
      ScreenRecipe_div.appendChild(createRecipe(result[i]));
  } else {
    title.textContent = "לא נמצאו מתכונים";
    ScreenRecipe_div.appendChild(title);
  }

  docFrag.appendChild(ScreenRecipe_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
/*------------------------------------------------------------------------------*/
//Grillman functions
function Grillman(name = "", phoneNumber = "", details = "", price = "") {
  return (grillman = {
    grillmanName: name,
    grillmanPhoneNumber: phoneNumber,
    grillmanDetails: details,
    grillmanPrice: price,
  });
}

let grillmanArray = [];

function createGrillman(grillmanObject) {
  const grillDiv = document.createElement("div");

  grillDiv.className = "grillman_class";

  const grillmanName = document.createElement("h4");
  grillmanName.textContent = "שם:    " + grillmanObject.grillmanName;
  const grillmanPhone = document.createElement("h4");
  grillmanPhone.textContent =
    "מספר פלאפון:    " + grillmanObject.grillmanPhoneNumber;
  const detailsTitle = document.createElement("h3");
  detailsTitle.textContent = "פרטים: ";
  const details = document.createElement("par");
  details.textContent = grillmanObject.grillmanDetails;
  const price = document.createElement("h5");
  price.textContent = "מחיר לשעת עבודה:    " + grillmanObject.grillmanPrice;

  const divideLine = document.createElement("hr");
  divideLine.className = "solid";

  grillDiv.appendChild(grillmanName);
  grillDiv.appendChild(grillmanPhone);
  grillDiv.appendChild(detailsTitle);
  grillDiv.appendChild(details);
  grillDiv.appendChild(price);

  if (grillmanObject != grillmanArray[grillmanArray.length - 1])
    grillDiv.appendChild(divideLine);

  return grillDiv;
}
function newGrillman() {
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
  title.textContent = "הוספת גרילמן";
  docFrag.appendChild(title);

  //Grillman's details
  const inputFullName = document.createElement("input");
  inputFullName.placeholder = "שם מלא: ";
  inputFullName.id = "inputTitle";
  docFrag.appendChild(inputFullName);
  docFrag.appendChild(br1);
  docFrag.appendChild(br2);

  const inputPhoneNumber = document.createElement("input");
  inputPhoneNumber.placeholder = "מספר פלאפון: ";
  inputPhoneNumber.id = "grillmanPhone";
  docFrag.appendChild(inputPhoneNumber);
  docFrag.appendChild(br3);
  docFrag.appendChild(br4);

  //Addition data on grillman
  const div1 = document.createElement("div");
  div1.textContent = "פרט על עצמך: ";
  div1.style.fontSize = "20px";
  div1.style.fontWeight = "bold";
  docFrag.appendChild(div1);

  const textArea1 = document.createElement("textarea");
  textArea1.placeholder = "ספר על הניסיון הקודם שלך, אירועים שעשית וכו'";
  textArea1.rows = "10";
  textArea1.cols = "70";
  textArea1.style.alignContent = "center";
  textArea1.id = "details";
  docFrag.appendChild(textArea1);
  docFrag.appendChild(br5);
  docFrag.appendChild(br6);

  const priceOneHour = document.createElement("input");
  priceOneHour.placeholder = "מחיר לשעת עבודה";
  priceOneHour.id = "grillmanPrice";
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
  const br = document.createElement("br");

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const ScreenGrillman_div = document.createElement("div");
  ScreenGrillman_div.id = "background_div";
  const title = document.createElement("h1");
  title.textContent = "רשימת גרילמנים";
  ScreenGrillman_div.appendChild(title);

  const search = document.createElement("input");
  search.id = "searchGrillman";
  search.style.fontSize = "16px";
  search.placeholder = "חיפוש גרילמן: ";

  const btSearch = document.createElement("button");
  btSearch.addEventListener("click", searchGrillman);
  btSearch.textContent = "חפש";

  ScreenGrillman_div.appendChild(search);
  ScreenGrillman_div.appendChild(btSearch);
  ScreenGrillman_div.appendChild(br);
  if (grillmanArray.length != 0) {
    const divideLine = document.createElement("hr");
    divideLine.style.borderStyle = "solid double";
    divideLine.style.borderWidth = "medium";
    divideLine.style.backgroundColor = "black";
    ScreenGrillman_div.appendChild(divideLine);
  }

  for (let i = 0; i < grillmanArray.length; i++)
    ScreenGrillman_div.appendChild(createGrillman(grillmanArray[i]));

  docFrag.appendChild(ScreenGrillman_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
function searchGrillman() {
  const searchGrillman = document.getElementById("searchGrillman");
  let resName = searchGrillman.value;
  let result = [];
  for (let i = 0; i < grillmanArray.length; i++) {
    if (grillmanArray[i].grillmanName === resName)
      result.push(grillmanArray[i]);
  }

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const ScreenGrillman_div = document.createElement("div");
  ScreenGrillman_div.id = "background_div";
  const title = document.createElement("h1");

  if (result.length != 0) {
    title.textContent = "תוצאות חיפוש";
    ScreenGrillman_div.appendChild(title);
    const divideLine = document.createElement("hr");
    divideLine.style.borderStyle = "solid double";
    divideLine.style.borderWidth = "medium";
    divideLine.style.backgroundColor = "black";
    ScreenGrillman_div.appendChild(divideLine);
    for (let i = 0; i < result.length; i++)
      ScreenGrillman_div.appendChild(createGrillman(result[i]));
  } else {
    title.textContent = "לא נמצאו גרילמנים";
    ScreenGrillman_div.appendChild(title);
  }

  docFrag.appendChild(ScreenGrillman_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
//2 event functions
function Event(
  name = "",
  phone = "",
  participant = 0,
  location = "",
  moreDetails = ""
) {
  return (evt = {
    eventName: name,
    eventPhone: phone,
    eventParticipant: participant,
    eventLocation: location,
    eventDetails: moreDetails,
  });
}

let eventArray = [];

function createEvent(eventObject) {
  const evtDiv = document.createElement("div");
  const br = document.createElement("br");

  evtDiv.className = "event_class";

  const eventName = document.createElement("h4");
  eventName.textContent = "שם:    " + eventObject.eventName;
  const eventPhone = document.createElement("h4");
  eventPhone.textContent = "מספר פלאפון:    " + eventObject.eventPhone;
  const partic = document.createElement("h4");
  partic.textContent = "מספר משתתפים:    " + eventObject.eventParticipant;

  const location = document.createElement("i");
  location.className = "material-icons";
  if (eventObject.eventLocation != "")
    location.textContent = eventObject.eventLocation + "place";
  else location.textContent = "לא צוין מיקום";

  const details = document.createElement("par");
  details.textContent = "פרטים נוספים:    " + eventObject.eventDetails;

  const divideLine = document.createElement("hr");
  divideLine.className = "solid";

  evtDiv.appendChild(eventName);
  evtDiv.appendChild(eventPhone);
  evtDiv.appendChild(partic);
  evtDiv.appendChild(location);
  evtDiv.appendChild(br);
  evtDiv.appendChild(details);

  if (eventObject != eventArray[eventArray.length - 1])
    evtDiv.appendChild(divideLine);

  return evtDiv;
}

function newEvent() {
  const br1 = document.createElement("br");
  const br2 = document.createElement("br");
  const br3 = document.createElement("br");
  const br4 = document.createElement("br");
  const br5 = document.createElement("br");
  const br6 = document.createElement("br");
  const br7 = document.createElement("br");
  const br8 = document.createElement("br");

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");
  docFrag.id = "background_div";

  const title = document.createElement("h3");
  title.textContent = "יצירת אירוע חדש";
  docFrag.appendChild(title);

  //Event's owner details
  const inputFullName = document.createElement("input");
  inputFullName.placeholder = "שם מלא: ";
  inputFullName.id = "name";
  docFrag.appendChild(inputFullName);
  docFrag.appendChild(br1);
  docFrag.appendChild(br2);

  const inputPhoneNumber = document.createElement("input");
  inputPhoneNumber.placeholder = "מספר פלאפון: ";
  inputPhoneNumber.id = "phone";
  docFrag.appendChild(inputPhoneNumber);
  docFrag.appendChild(br3);
  docFrag.appendChild(br4);

  //Event's details
  const participantAmount = document.createElement("input");
  participantAmount.placeholder = "מספר משתתפים: ";
  participantAmount.id = "part";
  docFrag.appendChild(participantAmount);
  docFrag.appendChild(br5);
  docFrag.appendChild(br6);

  const location = document.createElement("input");
  location.placeholder = "איזור: ";
  location.id = "loc";
  docFrag.appendChild(location);
  docFrag.appendChild(br7);
  docFrag.appendChild(br8);

  const textArea1 = document.createElement("textarea");
  textArea1.placeholder = "בקשות מיוחדות / מידע נוסף על האירוע: ";
  textArea1.rows = "10";
  textArea1.cols = "70";
  textArea1.style.alignContent = "center";
  textArea1.id = "moreDetails";
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

  const grillmanImage = document.createElement("img");
  grillmanImage.src = "./images/restaurantImg.jpg";
  grillmanImage.className = "small_images";
  docFrag.appendChild(grillmanImage);

  main.replaceWith(docFrag);
}
function eventList() {

  const main = document.getElementById("background_div");
  const docFrag = document.createElement("div");

  const ScreenEvent_div = document.createElement("div");
  ScreenEvent_div.id = "background_div";
  const title = document.createElement("h1");
  title.textContent = "רשימת איוונטים";
  ScreenEvent_div.appendChild(title);

  if (eventArray.length != 0) {
    const divideLine = document.createElement("hr");
    divideLine.style.borderStyle = "solid double";
    divideLine.style.borderWidth = "medium";
    divideLine.style.backgroundColor = "black";
    ScreenEvent_div.appendChild(divideLine);
  }

  for (let i = 0; i < eventArray.length; i++)
    ScreenEvent_div.appendChild(createEvent(eventArray[i]));

  docFrag.appendChild(ScreenEvent_div);
  docFrag.id = "main";
  main.replaceWith(docFrag);
}
function saveNewGrillman() {
  const docFrag1 = document.getElementById("background_div");

  const name = document.getElementById("inputTitle").value;
  const phone = document.getElementById("grillmanPhone").value;
  const details = document.getElementById("details").value;
  const price = document.getElementById("grillmanPrice").value;

  if (name == "" || phone == "" || details == "" || price == "") {
    alert("חובה למלא את כל השדות");
    return;
  }
  let g1 = Grillman(name, phone, details, price);
  grillmanArray.push(g1);
  // need to add an id
  //sent grilman to fb
  sendGrillManToFireBase(g1);

  document.getElementById("inputTitle").value = "";
  document.getElementById("grillmanPhone").value = "";
  document.getElementById("details").value = "";
  document.getElementById("grillmanPrice").value = "";
}

function saveNewEvent() {
  const docFrag1 = document.getElementById("background_div");

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const partic = document.getElementById("part").value;
  const loc = document.getElementById("loc").value;
  const details = document.getElementById("moreDetails").value;

  if (name == "" || phone == "" || partic == "" || loc == "" || details == "") {
    alert("חובה למלא את כל השדות");
    return;
  }
  let e1 = Event(name, phone, partic, loc, details);
  eventArray.push(e1);
  // need to add id
  // send event to fire base
  sendEventToFireBase(e1);

  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("part").value = "";
  document.getElementById("loc").value = "";
  document.getElementById("moreDetails").value = "";
}

//--------------------------------------------------------------------------
// firebase

function fireBase() {
  //init
  /*
  //get restaurant Counter
  firebase
    .database()
    .ref("Restaurants")
    .child("restaurantCounter")
    .on("value", function (snapshot) {
      restaurantCounter = snapshot.val().restaurantCounter;
      // console.log("restaurantCounter: " + restaurantCounter);
    });
  
*/
  getRestauranFromFireBase();
  getRecipeFromFireBase();
  getButcherFromFireBase();
  getGrillManFromFireBase();
  getEventFromFireBase();
}

// //send and get Restaurants from fb
// function sendRestauranToFireBase(r1) {
//   firebase
//     .database()
//     .ref("Restaurants")
//     .child(restaurantCounter + "")
//     .set(r1);
//   //counter
//   restaurantCounter++;
//   firebase.database().ref("Restaurants").child("restaurantCounter").set({
//     restaurantCounter: restaurantCounter,
//   });
//   // console.log("im here res count: " + restaurantCounter);
// }

// function getRestauranFromFireBase() {
//   for (let i = 0; i < restaurantCounter; i++) {
//     number = i;
//     firebase
//       .database()
//       .ref("Restaurants")
//       .child(number + "")
//       .on("value", function (snapshot) {
//         let r1 = snapshot.val();
//         if (r1 != null) {
//           restaurantArray.push(r1);
//         }
//       });
//   }
// }
function sendRestauranToFireBase(r1) {
  firebase.database().ref("Restaurants").child(r1.restaurantName).set(r1);
}
function getRestauranFromFireBase() {
  let database = firebase.database().ref("Restaurants");
  database.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      // let childKey = childSnapshot.key;
      let childData = childSnapshot.val();
      // console.log("childKey " + childKey);
      // console.log("childData " + childData);
      // console.log("childData name " + childData.restaurantName);
      restaurantArray.push(childData);
      //addARestaurantToTheArray(childData);
    });
  });
}
//need to add to all the other
function addARestaurantToTheArray(childData) {
  restaurantArray.push(childData);
  viewRestaurant();
}

//send and get recipes from fb
function sendRecipeToFireBase(r1) {
  firebase.database().ref("Recipes").child(r1.recipeName).set(r1);
}
function getRecipeFromFireBase() {
  let database = firebase.database().ref("Recipes");
  database.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let childData = childSnapshot.val();
      recipesArray.push(childData);
      //addARecipeToTheArray(childData);
    });
  });
}

//send and get Butchers from fb
function sendButcherToFireBase(r1) {
  firebase.database().ref("Butchers").child(r1.butcherName).set(r1);
}
function getButcherFromFireBase() {
  let database = firebase.database().ref("Butchers");
  database.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let childData = childSnapshot.val();
      butchersArray.push(childData);
      //addAButcherToTheArray(childData);
    });
  });
}

//send and get Grillman from fb
function sendGrillManToFireBase(r1) {
  firebase.database().ref("GrillMans").child(r1.grillmanName).set(r1);
}
function getGrillManFromFireBase() {
  let database = firebase.database().ref("GrillMans");
  database.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let childData = childSnapshot.val();
      grillmanArray.push(childData);
      //addAGrillManToTheArray(childData);
    });
  });
}

//send and get event from fb
function sendEventToFireBase(r1) {
  firebase.database().ref("Events").child(r1.eventName).set(r1);
}
function getEventFromFireBase() {
  let database = firebase.database().ref("Events");
  database.once("value", function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      let childData = childSnapshot.val();
      eventArray.push(childData);
      //addAEventToTheArray(childData);
    });
  });
}
