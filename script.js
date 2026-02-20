function show(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.remove('active');
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.classList.add('active');
  }
}

function searchAll() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(query)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Initialize sections
document.getElementById('sections').innerHTML = `
<div id="home" class="section active">
  <h2>مرحباً بك</h2>
  <div class="card">موقع إسلامي شامل يحتوي على الأحاديث والآيات والفتاوى والكتب والسيرة والأذكار ومواقيت الصلاة.</div>
</div>
<div id="hadith" class="section">
  <h2>📜 أحاديث صحيحة</h2>
  <div class="card searchable">إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى.</div>
  <div class="card searchable">الدين النصيحة.</div>
  <div class="card searchable">من لا يرحم لا يُرحم.</div>
  <div class="card searchable">لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.</div>
  <div class="card searchable">الكلمة الطيبة صدقة.</div>
  <div class="card searchable">يسّروا ولا تعسّروا، وبشّروا ولا تنفّروا.</div>
  <div class="card searchable">اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن.</div>
  <div class="card searchable">من غش فليس منا.</div>
  <div class="card searchable">خيركم خيركم لأهله، وأنا خيركم لأهلي.</div>
  <div class="card searchable">الحياء شعبة من الإيمان.</div>
  <div class="card searchable">من سلك طريقًا يلتمس فيه علمًا، سهل الله له به طريقًا إلى الجنة.</div>
  <div class="card searchable">المسلم من سلم المسلمون من لسانه ويده.</div>
  <div class="card searchable">لا ضرر ولا ضرار.</div>
  <div class="card searchable">تبسمك في وجه أخيك صدقة.</div>
  <div class="card searchable">إن الله لا ينظر إلى صوركم وأموالكم، ولكن ينظر إلى قلوبكم وأعمالكم.</div>
  <div class="card searchable">الدنيا سجن المؤمن وجنة الكافر.</div>
  <div class="card searchable">الطهور شطر الإيمان.</div>
  <div class="card searchable">الدال على الخير كفاعله.</div>
  <div class="card searchable">من حسن إسلام المرء تركه ما لا يعنيه.</div>
  <div class="card searchable">الراحمون يرحمهم الرحمن، ارحموا من في الأرض يرحمكم من في السماء.</div>

  <h2>⚠️ أحاديث غير صحيحة منتشرة</h2>
  <div class="card searchable">اطلبوا العلم ولو في الصين.</div>
  <div class="card searchable">حب الوطن من الإيمان.</div>
  <div class="card searchable">النظافة من الإيمان.</div>
  <div class="card searchable">اختلاف أمتي رحمة.</div>
  <div class="card searchable">الفقر فخري.</div>
  <div class="card searchable">الدين المعاملة.</div>
  <div class="card searchable">كما تكونوا يولّى عليكم.</div>
  <div class="card searchable">خير الأسماء ما عُبِّد وحُمِّد.</div>
  <div class="card searchable">الجار قبل الدار.</div>
  <div class="card searchable">خير البر عاجله.</div>
  <div class="card searchable">مداد العلماء أفضل من دم الشهداء.</div>
  <div class="card searchable">رجعنا من الجهاد الأصغر إلى الجهاد الأكبر.</div>
  <div class="card searchable">اعمل لدنياك كأنك تعيش أبداً واعمل لآخرتك كأنك تموت غداً.</div>
  <div class="card searchable">من حج ولم يزرني فقد جفاني.</div>
  <div class="card searchable">من تزوج فقد استكمل نصف دينه.</div>
  <div class="card searchable">الساكت عن الحق شيطان أخرس.</div>
  <div class="card searchable">الولد سر أبيه.</div>
  <div class="card searchable">الوقت كالسيف إن لم تقطعه قطعك.</div>
  <div class="card searchable">اطلبوا الخير عند حسان الوجوه.</div>
  <div class="card searchable">من عشق فكتم فعف فمات مات شهيداً.</div>
</div>
<div id="quran" class="section">
  <h2>📖 آيات وتأثيرها</h2>
  <div class="card searchable">وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ (للرزق)</div>
  <div class="card searchable">أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ (لراحة القلب)</div>
  <div class="card searchable">فَإِنَّ مَعَ الْعُسْرِ يُسْرًا (للفرج بعد الضيق)</div>
  <div class="card searchable">وَلَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ (للأمل)</div>
  <div class="card searchable">إِنَّ اللَّهَ مَعَ الصَّابِرِينَ (للصبر)</div>
  <div class="card searchable">وَقُل رَّبِّ زِدْنِي عِلْمًا (لزيادة العلم)</div>
  <div class="card searchable">رَّبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي (لتيسير الأمور)</div>
  <div class="card searchable">حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ (للتوكل)</div>
  <div class="card searchable">وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ (عند الشدة)</div>
  <div class="card searchable">ادْعُونِي أَسْتَجِبْ لَكُمْ (للدعاء والاستجابة)</div>
  <div class="card searchable">إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ (عند الخوف)</div>
  <div class="card searchable">فَاذْكُرُونِي أَذْكُرْكُمْ (للقرب من الله)</div>
  <div class="card searchable">وَتَوَكَّلْ عَلَى اللَّهِ وَكَفَىٰ بِاللَّهِ وَكِيلًا (للتوكل والاطمئنان)</div>
  <div class="card searchable">إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ (للثبات على الخير)</div>
  <div class="card searchable">وَاللَّهُ خَيْرُ الرَّازِقِينَ (للرزق)</div>
  <div class="card searchable">إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ (للتوبة)</div>
  <div class="card searchable">رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا (للثبات)</div>
  <div class="card searchable">وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ (للتوفيق)</div>
  <div class="card searchable">إِنَّ اللَّهَ غَفُورٌ رَّحِيمٌ (للرجاء والمغفرة)</div>
  <div class="card searchable">وَقُلْ جَاءَ الْحَقُّ وَزَهَقَ الْبَاطِلُ (لنصرة الحق)</div>
</div>
<div id="fatwa" class="section">
  <h2>⚖️ فتاوى مشهورة</h2>
  <div class="card searchable">حكم الصلاة تاركًا لها تكاسلًا: جمهور العلماء على أنه على خطر عظيم ومرتكب لكبيرة من أكبر الكبائر.</div>
  <div class="card searchable">حكم فوائد البنوك التقليدية: جمهور العلماء على تحريمها لأنها من الربا.</div>
  <div class="card searchable">حكم التدخين: محرم عند كثير من العلماء لما فيه من ضرر.</div>
  <div class="card searchable">حكم الموسيقى: خلاف بين العلماء، وأكثرهم على التحريم إلا ما كان من الدف في المناسبات المباحة.</div>
  <div class="card searchable">حكم كشف الوجه للمرأة: مسألة خلافية بين الفقهاء.</div>
  <div class="card searchable">حكم لبس الذهب للرجال: محرم.</div>
  <div class="card searchable">حكم زكاة الذهب: واجبة إذا بلغ النصاب وحال عليه الحول.</div>
  <div class="card searchable">حكم تأخير الصلاة عن وقتها بلا عذر: لا يجوز وهو إثم عظيم.</div>
  <div class="card searchable">حكم صيام من أكل أو شرب ناسيًا: صومه صحيح.</div>
  <div class="card searchable">حكم قراءة الفاتحة خلف الإمام: خلاف بين الفقهاء.</div>
  <div class="card searchable">حكم الاحتفال بالمولد النبوي: مسألة خلافية بين العلماء.</div>
  <div class="card searchable">حكم البيع بالتقسيط مع زيادة في السعر: جائز إذا عُرف الثمن واتفق عليه من البداية.</div>
  <div class="card searchable">حكم إخراج زكاة الفطر مالًا: خلاف بين الفقهاء، وجمهورهم على إخراجها طعامًا.</div>
  <div class="card searchable">حكم القروض بين الناس بدون فائدة: جائز إذا خلا من الربا.</div>
  <div class="card searchable">حكم الجمع بين الصلوات لغير عذر: لا يجوز عند جمهور العلماء.</div>
  <div class="card searchable">حكم الطلاق في حال الغضب: يقع عند جمهور الفقهاء ما لم يصل الغضب لحد فقدان الوعي.</div>
  <div class="card searchable">حكم قراءة القرآن بدون وضوء: جائز من غير مس المصحف عند كثير من العلماء.</div>
  <div class="card searchable">حكم التعامل بالعملات الرقمية: محل اجتهاد وخلاف معاصر بين العلماء.</div>
  <div class="card searchable">حكم الوصية بأكثر من الثلث: لا يجوز إلا بإذن الورثة.</div>
  <div class="card searchable">حكم الدعاء بعد الصلاة جماعة بصوت واحد دائمًا: مسألة خلافية بين أهل العلم.</div>
</div>
<div id="books" class="section">
  <h2>📚 أشهر الكتب</h2>
  <div class="card searchable">رياض الصالحين</div>
  <div class="card searchable">صحيح البخاري</div>
  <div class="card searchable">صحيح مسلم</div>
  <div class="card searchable">الرحيق المختوم</div>
  <div class="card searchable">تفسير ابن كثير</div>
</div>
<div id="seerah" class="section">
  <h2>🕋 السيرة النبوية</h2>
  <div class="card searchable">وُلِدَ النبي محمد ﷺ في مكة عام الفيل، يتيم الأب، ثم توفيت أمه وهو صغير فكفله جده عبد المطلب، ثم عمه أبو طالب.</div>
  <div class="card searchable">نشأ ﷺ معروفًا بالصدق والأمانة حتى لُقِّب بـ "الصادق الأمين".</div>
  <div class="card searchable">عمل في رعي الغنم ثم في التجارة، وتزوج من السيدة خديجة رضي الله عنها وهو في الخامسة والعشرين من عمره.</div>
  <div class="card searchable">عند بلوغه الأربعين، نزل عليه الوحي في غار حراء، وبدأت دعوته إلى توحيد الله وترك عبادة الأصنام.</div>
  <div class="card searchable">تعرض للأذى والاضطهاد من قريش، وصبر هو وأصحابه على ذلك.</div>
  <div class="card searchable">هاجر بعض الصحابة إلى الحبشة، ثم هاجر ﷺ إلى المدينة المنورة، فكانت الهجرة بداية قيام الدولة الإسلامية.</div>
  <div class="card searchable">آخى بين المهاجرين والأنصار، وبنى المسجد النبوي، ونظّم شؤون المجتمع.</div>
  <div class="card searchable">وقعت عدة غزوات دفاعًا عن المسلمين، مثل بدر وأحد والخندق.</div>
  <div class="card searchable">في السنة الثامنة للهجرة تم فتح مكة، فعفا عن أهلها وقال: "اذهبوا فأنتم الطلقاء".</div>
  <div class="card searchable">استمرت الدعوة تنتشر في الجزيرة العربية حتى دخل الناس في دين الله أفواجًا.</div>
  <div class="card searchable">حجَّ ﷺ حجة الوداع في السنة العاشرة للهجرة، وأوصى بالتمسك بالقرآن والسنة وحسن معاملة الناس.</div>
  <div class="card searchable">توفي ﷺ في المدينة المنورة سنة 11 هـ، عن عمر 63 عامًا، بعد أن بلّغ الرسالة وأدى الأمانة ونصح الأمة.</div>
</div>
<div id="sahaba" class="section">
  <h2>⭐ أشهر الصحابة</h2>
  <div class="card searchable">
    <strong>أبو بكر الصديق:</strong> أول الخلفاء بعد النبي ﷺ وصاحب الهجرة، معروف بصلاحه وصدقه.
  </div>
  <div class="card searchable">
    <strong>عمر بن الخطاب:</strong> ثاني الخلفاء، معروف بالعدل والقوة في تطبيق الشريعة.
  </div>
  <div class="card searchable">
    <strong>عثمان بن عفان:</strong> ثالث الخلفاء، معروف بحسن خلقه ونسخ القرآن في نسخة واحدة.
  </div>
  <div class="card searchable">
    <strong>علي بن أبي طالب:</strong> رابع الخلفاء، ابن عم النبي ﷺ، مشهور بالشجاعة والعلم.
  </div>
  <div class="card searchable">
    <strong>خالد بن الوليد:</strong> القائد العسكري الشجاع، لقب بـ "سيف الله المسلول".
  </div>
</div>
<div id="azkar" class="section">
  <h2>📿 أشهر الأذكار</h2>
  <div class="card searchable">سبحان الله.</div>
  <div class="card searchable">الحمد لله.</div>
  <div class="card searchable">الله أكبر.</div>
  <div class="card searchable">لا إله إلا الله.</div>
  <div class="card searchable">سبحان الله وبحمده.</div>
  <div class="card searchable">سبحان الله العظيم.</div>
  <div class="card searchable">لا حول ولا قوة إلا بالله.</div>
  <div class="card searchable">أستغفر الله العظيم وأتوب إليه.</div>
  <div class="card searchable">اللهم صل وسلم على نبينا محمد.</div>
  <div class="card searchable">حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم.</div>
  <div class="card searchable">رضيت بالله ربًا وبالإسلام دينًا وبمحمد ﷺ نبيًا.</div>
  <div class="card searchable">اللهم اغفر لي وارحمني واهدني وعافني وارزقني.</div>
  <div class="card searchable">اللهم إني أعوذ بك من الهم والحزن، والعجز والكسل، والبخل والجبن، وضلع الدين وغلبة الرجال.</div>
  <div class="card searchable">اللهم إنك عفو تحب العفو فاعفُ عني.</div>
  <div class="card searchable">رب اغفر لي ولوالدي وللمؤمنين يوم يقوم الحساب.</div>
  <div class="card searchable">يا حي يا قيوم برحمتك أستغيث.</div>
  <div class="card searchable">اللهم إني أسألك العفو والعافية في الدنيا والآخرة.</div>
  <div class="card searchable">ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار.</div>
  <div class="card searchable">اللهم إني أعوذ بك من شر ما عملت ومن شر ما لم أعمل.</div>
  <div class="card searchable">اللهم ثبت قلبي على دينك.</div>
</div>
<div id="prayer" class="section">
  <h2>🕋 مواقيت الصلاة - القاهرة</h2>
  <div id="prayerTimes">جاري التحميل...</div>
</div>
`;

// Fetch prayer times
fetch("https://api.aladhan.com/v1/timingsByCity?city=Cairo&country=Egypt&method=5")
  .then(res => res.json())
  .then(data => {
    const t = data.data.timings;
    const prayerContainer = document.getElementById("prayerTimes");
    if (prayerContainer) {
      prayerContainer.innerHTML = `
                <div class="card">الفجر: ${t.Fajr}</div>
                <div class="card">الظهر: ${t.Dhuhr}</div>
                <div class="card">العصر: ${t.Asr}</div>
                <div class="card">المغرب: ${t.Maghrib}</div>
                <div class="card">العشاء: ${t.Isha}</div>
            `;
    }
  })
  .catch(err => {
    console.error("Error fetching prayer times:", err);
    document.getElementById("prayerTimes").innerHTML = '<div class="card">تعذر تحميل المواقيت، يرجى التحقق من الاتصال.</div>';
  });
