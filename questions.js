const QUESTION_SETS = [
  {
    "id": "upgrade-13",
    "label": "第13回 ①＋②",
    "title": "名詞・冠詞の語法／代名詞の語法",
    "range": "UPGRADE 21・22",
    "questions": [
      {
        "sourceSet": "①",
        "sourceNo": 4,
        "text": "The teacher gave each child （　） advice.",
        "choices": [
          "an",
          "many",
          "one",
          "some"
        ],
        "answer": 3,
        "translation": "先生は子ども一人ひとりにいくらか助言を与えた。",
        "tip": "advice は不可算名詞。some advice は可、an advice は不可。",
        "id": 1
      },
      {
        "sourceSet": "①",
        "sourceNo": 5,
        "text": "I'm not in the habit of carrying （　） in my wallet.",
        "choices": [
          "much money",
          "a big money",
          "many moneys",
          "big moneys"
        ],
        "answer": 0,
        "translation": "私は財布にたくさんのお金を持ち歩く習慣はない。",
        "tip": "money は不可算名詞。many ではなく much を使う。",
        "id": 2
      },
      {
        "sourceSet": "①",
        "sourceNo": 6,
        "text": "There is （　） that recovery from this disease can occur partially or completely through natural healing.",
        "choices": [
          "a large amount of evidences",
          "growing evidence",
          "grown evidence",
          "plenty of evidences"
        ],
        "answer": 1,
        "translation": "この病気からの回復が自然治癒によって部分的または完全に起こりうるという証拠が増えている。",
        "tip": "evidence は不可算名詞。growing evidence = 「増えつつある証拠」。",
        "id": 3
      },
      {
        "sourceSet": "①",
        "sourceNo": 7,
        "text": "He parked in a no-parking zone, so the police made him pay a （　） of ¥10,000.",
        "choices": [
          "fee",
          "fine",
          "cost",
          "charge"
        ],
        "answer": 1,
        "translation": "彼は駐車禁止区域に車を止めたので、警察は1万円の罰金を払わせた。",
        "tip": "fine = 「罰金」。fee はサービスなどへの料金。",
        "id": 4
      },
      {
        "sourceSet": "①",
        "sourceNo": 8,
        "text": "What is the train （　） from Hiroshima to Osaka?",
        "choices": [
          "fare",
          "fee",
          "charge",
          "price"
        ],
        "answer": 0,
        "translation": "広島から大阪までの電車賃はいくらですか。",
        "tip": "fare = 「運賃」。train fare / bus fare など。",
        "id": 5
      },
      {
        "sourceSet": "①",
        "sourceNo": 9,
        "text": "If your tooth hurts, you should see a dentist. Try to make （　） as soon as possible.",
        "choices": [
          "a date",
          "a promise",
          "a booking",
          "an appointment"
        ],
        "answer": 3,
        "translation": "歯が痛むなら歯医者に行くべきだ。できるだけ早く予約を取りなさい。",
        "tip": "make an appointment = 「予約を取る」。医師・歯科医などとの予約に使う。",
        "id": 6
      },
      {
        "sourceSet": "①",
        "sourceNo": 10,
        "text": "Three days ago Ayumi told me that she would leave for Paris （　）, but I saw her in Shinjuku yesterday.",
        "choices": [
          "next day",
          "the following day",
          "the previous day",
          "the day before"
        ],
        "answer": 1,
        "translation": "3日前、あゆみは翌日にパリへ出発すると私に言ったが、昨日新宿で彼女を見かけた。",
        "tip": "間接話法では next day → the following day とするのが基本。",
        "id": 7
      },
      {
        "sourceSet": "①",
        "sourceNo": 11,
        "text": "It’s easy enough to get along if you have a job and enough money, but life is really difficult for （　）.",
        "choices": [
          "a poor",
          "poors",
          "the poor",
          "the poors"
        ],
        "answer": 2,
        "translation": "仕事と十分なお金があれば何とかやっていけるが、貧しい人々にとって人生は本当に厳しい。",
        "tip": "the + 形容詞 = 「〜な人々」。the poor = 「貧しい人々」。",
        "id": 8
      },
      {
        "sourceSet": "①",
        "sourceNo": 12,
        "text": "Jim has three brothers. One is a doctor, and （　） are computer scientists.",
        "choices": [
          "another",
          "others",
          "the other",
          "the others"
        ],
        "answer": 3,
        "translation": "ジムには3人の兄弟がいる。1人は医者で、残りの2人はコンピューター科学者だ。",
        "tip": "the others = 「残りの人々」。範囲が決まっているときに使う。",
        "id": 9
      },
      {
        "sourceSet": "①",
        "sourceNo": 13,
        "text": "Since she didn't like the first kind of perfume, she asked the salesperson to show her （　）.",
        "choices": [
          "another kind",
          "other kind",
          "the another kind",
          "the other's kind"
        ],
        "answer": 0,
        "translation": "最初の種類の香水が気に入らなかったので、彼女は店員に別の種類を見せてほしいと頼んだ。",
        "tip": "another + 単数名詞 = 「もう1つの／別の」。",
        "id": 10
      },
      {
        "sourceSet": "①",
        "sourceNo": 14,
        "text": "Children should be taught how to get along with （　）.",
        "choices": [
          "another",
          "other",
          "others",
          "the others"
        ],
        "answer": 2,
        "translation": "子どもたちは他人とうまくやっていく方法を教えられるべきだ。",
        "tip": "others = 「他の人々」。名詞として単独で使える。",
        "id": 11
      },
      {
        "sourceSet": "①",
        "sourceNo": 15,
        "text": "To know is one thing, to teach is quite （　）.",
        "choices": [
          "other",
          "another",
          "anything",
          "something else"
        ],
        "answer": 1,
        "translation": "知っていることと教えることはまったく別のことだ。",
        "tip": "one thing ... another = 「〜と…は別物だ」という定型表現。",
        "id": 12
      },
      {
        "sourceSet": "①",
        "sourceNo": 16,
        "text": "The program allows representatives from many countries to communicate （　）.",
        "choices": [
          "each other",
          "one another",
          "themselves",
          "with each other"
        ],
        "answer": 3,
        "translation": "そのプログラムによって、多くの国の代表者たちは互いに意思疎通できる。",
        "tip": "communicate with each other = 「互いに意思疎通する」。communicate は通常 with を伴う。",
        "id": 13
      },
      {
        "sourceSet": "①",
        "sourceNo": 17,
        "text": "This chair is the （　） of furniture that I like the best in my room.",
        "choices": [
          "piece",
          "one",
          "number",
          "set"
        ],
        "answer": 0,
        "translation": "この椅子は、私の部屋にある家具の中で私がいちばん好きな一品だ。",
        "tip": "furniture は不可算名詞。a piece of furniture と数える。",
        "id": 14
      },
      {
        "sourceSet": "①",
        "sourceNo": 18,
        "text": "I have run out of sugar, so I must go to the grocery store and get （　）.",
        "choices": [
          "a few",
          "one",
          "some",
          "that"
        ],
        "answer": 2,
        "translation": "砂糖を切らしてしまったので、食料品店へ行って少し買わなければならない。",
        "tip": "sugar は不可算名詞なので some を使う。",
        "id": 15
      },
      {
        "sourceSet": "①",
        "sourceNo": 19,
        "text": "The climate of Siberia is not so mild as （　） of Japan.",
        "choices": [
          "that",
          "those",
          "this",
          "it"
        ],
        "answer": 0,
        "translation": "シベリアの気候は日本の気候ほど温暖ではない。",
        "tip": "that = 前に出た単数名詞の繰り返しを避ける代名詞。the climate → that。",
        "id": 16
      },
      {
        "sourceSet": "①",
        "sourceNo": 20,
        "text": "The duties of a policeman are more dangerous than （　）.",
        "choices": [
          "a teacher",
          "that of a teacher",
          "teachers",
          "those of a teacher"
        ],
        "answer": 3,
        "translation": "警察官の職務は教師の職務より危険だ。",
        "tip": "those = 前の複数名詞の代用。duties → those。",
        "id": 17
      },
      {
        "sourceSet": "①",
        "sourceNo": 21,
        "text": "Although scientists have developed several vaccines for cold viruses, （　） has proved effective against all types of colds.",
        "choices": [
          "none",
          "no one",
          "neither",
          "never"
        ],
        "answer": 0,
        "translation": "科学者たちは風邪のウイルス用ワクチンをいくつか開発してきたが、あらゆる種類の風邪に有効だと証明されたものは1つもない。",
        "tip": "none = 「どれも〜ない」。物にも人にも使える。",
        "id": 18
      },
      {
        "sourceSet": "①",
        "sourceNo": 22,
        "text": "\"How much gasoline is left in the tank?\"\n\"（　）, I'm afraid.\"",
        "choices": [
          "Not some",
          "None",
          "Nothing",
          "Not one"
        ],
        "answer": 1,
        "translation": "「タンクにガソリンはどれくらい残っていますか。」「残念ながら、全く残っていません。」",
        "tip": "none は量について「全くない」を表せる。gasoline は不可算名詞。",
        "id": 19
      },
      {
        "sourceSet": "①",
        "sourceNo": 23,
        "text": "Some people are very selfish. They only think of （　）.",
        "choices": [
          "them",
          "themselves",
          "oneself",
          "theirselves"
        ],
        "answer": 1,
        "translation": "とても自己中心的な人もいる。彼らは自分たちのことしか考えない。",
        "tip": "主語が they なので再帰代名詞は themselves。",
        "id": 20
      },
      {
        "sourceSet": "②",
        "sourceNo": 4,
        "text": "We don't have （　） furniture.",
        "choices": [
          "a single",
          "many",
          "many a",
          "much"
        ],
        "answer": 3,
        "translation": "私たちは家具をあまり持っていない。",
        "tip": "furniture は不可算名詞なので much furniture。",
        "id": 21
      },
      {
        "sourceSet": "②",
        "sourceNo": 5,
        "text": "Do you have （　） about this city?",
        "choices": [
          "any information",
          "some informations",
          "many informations",
          "any informations"
        ],
        "answer": 0,
        "translation": "この町について何か情報を持っていますか。",
        "tip": "information は不可算名詞。複数形 informations にはしない。",
        "id": 22
      },
      {
        "sourceSet": "②",
        "sourceNo": 6,
        "text": "The students liked that teacher because he gave （　）.",
        "choices": [
          "few homeworks",
          "many homeworks",
          "a lot of homeworks",
          "little homework"
        ],
        "answer": 3,
        "translation": "その先生は宿題をほとんど出さなかったので、生徒たちは彼を気に入っていた。",
        "tip": "homework は不可算名詞。little homework = 「ほとんど宿題がない」。",
        "id": 23
      },
      {
        "sourceSet": "②",
        "sourceNo": 7,
        "text": "I'm not in the habit of carrying （　） in my wallet.",
        "choices": [
          "much money",
          "a big money",
          "many moneys",
          "big moneys"
        ],
        "answer": 0,
        "translation": "私は財布にたくさんのお金を持ち歩く習慣はない。",
        "tip": "money は不可算名詞。much money が正しい。",
        "id": 24
      },
      {
        "sourceSet": "②",
        "sourceNo": 8,
        "text": "A: Good morning. How can I help you?\nB: Hi. Can I get （　） and a bagel to go?",
        "choices": [
          "two coffees",
          "two coffee",
          "coffee two",
          "coffees two"
        ],
        "answer": 0,
        "translation": "A：おはようございます。ご注文は？\nB：コーヒーを2つと、ベーグルを持ち帰りでお願いします。",
        "tip": "coffee は飲み物自体は不可算だが、注文では a coffee / two coffees = 「1杯／2杯」。",
        "id": 25
      },
      {
        "sourceSet": "②",
        "sourceNo": 9,
        "text": "Takeshi has a lot of （　） to turn in tomorrow morning.",
        "choices": [
          "assignments",
          "duties",
          "homeworks",
          "works"
        ],
        "answer": 0,
        "translation": "たけしには明日の朝提出する課題がたくさんある。",
        "tip": "assignment は可算名詞。homework は不可算名詞。",
        "id": 26
      },
      {
        "sourceSet": "②",
        "sourceNo": 10,
        "text": "What is the train （　） from Hiroshima to Osaka?",
        "choices": [
          "fare",
          "fee",
          "charge",
          "price"
        ],
        "answer": 0,
        "translation": "広島から大阪までの電車賃はいくらですか。",
        "tip": "fare = 「運賃」。",
        "id": 27
      },
      {
        "sourceSet": "②",
        "sourceNo": 11,
        "text": "If your tooth hurts, you should see a dentist. Try to make （　） as soon as possible.",
        "choices": [
          "a date",
          "a promise",
          "a booking",
          "an appointment"
        ],
        "answer": 3,
        "translation": "歯が痛むなら歯医者に行くべきだ。できるだけ早く予約を取りなさい。",
        "tip": "make an appointment = 「予約を取る」。",
        "id": 28
      },
      {
        "sourceSet": "②",
        "sourceNo": 12,
        "text": "He closed one of his eyes but not （　）.",
        "choices": [
          "another",
          "one another",
          "other",
          "the other"
        ],
        "answer": 3,
        "translation": "彼は片方の目を閉じたが、もう片方は閉じなかった。",
        "tip": "2つのうち残りの1つは the other。",
        "id": 29
      },
      {
        "sourceSet": "②",
        "sourceNo": 13,
        "text": "Since she didn't like the first kind of perfume, she asked the salesperson to show her （　）.",
        "choices": [
          "another kind",
          "other kind",
          "the another kind",
          "the other's kind"
        ],
        "answer": 0,
        "translation": "最初の種類の香水が気に入らなかったので、彼女は店員に別の種類を見せてほしいと頼んだ。",
        "tip": "another + 単数名詞 = 「もう1つの／別の」。",
        "id": 30
      },
      {
        "sourceSet": "②",
        "sourceNo": 14,
        "text": "Some voted for it; （　） voted against it; the rest didn't vote.",
        "choices": [
          "other",
          "others",
          "the other",
          "the others"
        ],
        "answer": 1,
        "translation": "賛成票を入れた人もいれば、反対票を入れた人もいて、残りは投票しなかった。",
        "tip": "others = 「ほかの人々」。some ... others ... = 「〜する人もいれば、…する人もいる」。",
        "id": 31
      },
      {
        "sourceSet": "②",
        "sourceNo": 15,
        "text": "Children should be taught how to get along with （　）.",
        "choices": [
          "another",
          "other",
          "others",
          "the others"
        ],
        "answer": 2,
        "translation": "子どもたちは他人とうまくやっていく方法を教えられるべきだ。",
        "tip": "others = 「他の人々」。",
        "id": 32
      },
      {
        "sourceSet": "②",
        "sourceNo": 16,
        "text": "You can see this TV program every （　） day.",
        "choices": [
          "other",
          "each",
          "another",
          "any"
        ],
        "answer": 0,
        "translation": "このテレビ番組は1日おきに見ることができる。",
        "tip": "every other day = 「1日おきに」。",
        "id": 33
      },
      {
        "sourceSet": "②",
        "sourceNo": 17,
        "text": "I want a pen. Will you please lend me （　）?",
        "choices": [
          "it",
          "one",
          "that",
          "mine"
        ],
        "answer": 1,
        "translation": "ペンが欲しいです。1本貸してくれませんか。",
        "tip": "one = 同種の可算名詞の代用。「そのペン」ではなく「1本のペン」。",
        "id": 34
      },
      {
        "sourceSet": "②",
        "sourceNo": 18,
        "text": "I have a blue pen and several red （　）.",
        "choices": [
          "it",
          "them",
          "one",
          "ones"
        ],
        "answer": 3,
        "translation": "私は青いペンを1本と赤いペンを数本持っている。",
        "tip": "ones = 前に出た複数の可算名詞の代用。pens → ones。",
        "id": 35
      },
      {
        "sourceSet": "②",
        "sourceNo": 19,
        "text": "The girl I liked was younger than （　） you were dancing with.",
        "choices": [
          "it",
          "that",
          "the one",
          "she"
        ],
        "answer": 2,
        "translation": "私が好きだった女の子は、あなたが踊っていた女の子より若かった。",
        "tip": "the one = 前に出た単数の可算名詞を指す。",
        "id": 36
      },
      {
        "sourceSet": "②",
        "sourceNo": 20,
        "text": "The duties of a policeman are more dangerous than （　）.",
        "choices": [
          "a teacher",
          "that of a teacher",
          "teachers",
          "those of a teacher"
        ],
        "answer": 3,
        "translation": "警察官の職務は教師の職務より危険だ。",
        "tip": "those = 複数名詞 duties の代用。",
        "id": 37
      },
      {
        "sourceSet": "②",
        "sourceNo": 21,
        "text": "Although scientists have developed several vaccines for cold viruses, （　） has proved effective against all types of colds.",
        "choices": [
          "none",
          "no one",
          "neither",
          "never"
        ],
        "answer": 0,
        "translation": "科学者たちは風邪のウイルス用ワクチンをいくつか開発してきたが、あらゆる種類の風邪に有効だと証明されたものは1つもない。",
        "tip": "none = 「どれも〜ない」。複数あるものの中から0を表す。",
        "id": 38
      },
      {
        "sourceSet": "②",
        "sourceNo": 22,
        "text": "There are many food stands on （　） side of the street.",
        "choices": [
          "both",
          "either",
          "other",
          "neither"
        ],
        "answer": 1,
        "translation": "通りの両側にたくさんの屋台がある。",
        "tip": "either side = 「どちらの側にも」→ 文脈上「両側に」。",
        "id": 39
      },
      {
        "sourceSet": "②",
        "sourceNo": 23,
        "text": "Some people are very selfish. They only think of （　）.",
        "choices": [
          "them",
          "themselves",
          "oneself",
          "theirselves"
        ],
        "answer": 1,
        "translation": "とても自己中心的な人もいる。彼らは自分たちのことしか考えない。",
        "tip": "they に対応する再帰代名詞は themselves。",
        "id": 40
      }
    ]
  }
];
