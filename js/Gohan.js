/* カードの中身
   ちゃんと実装するときはfetchかなにかでJSONを引っ張ってくるべきかと。 */
const cardDataList = [

        {
                title: "夏先取りトマトスムージー",
                body: "高校3年<br><br>材料 牛乳、トマト、はちみつ、ヨーグルト<br><br>現在コロナウイルスの影響で給食を食べる機会がなくなったため、牛乳が食品ロスの問題の１つとなっています。私たちのために酪農家さんが丹精込めて作ってくださった牛乳を無駄にしないために牛乳をトマトスムージーにアレンジしました。これからの夏にピッタリのさわやかな味わいと、はちみつやヨーグルトのみほんのりとした甘さが絶妙なバランスでとても飲みやすかったです！牛乳には骨を強くする効果もあり、外出自粛が続き紫外線に当たらず弱くなった骨をたくましくしてくれることでしょう！たった15分ほどで簡単に出来るスムージーで少量でもロスを減らすことができてよかったです。",
                like: "https://www.instagram.com/p/CBDryyBpDC8/"
                
        },
        {
                title: "ハーブラン",
                body: "高校3年<br><br>材料<br>有明ハーバー ダブルマロン味 さつまいも バニラアイス<br><br>地元神奈川県の大人気のお土産ありあけハーバーがCOVID- 19の緊急事態宣言により観光客が減少したことで売れ残りが増えてしまっています。そこでハーバーを土台としたモンブランを作りました！ハーバーを潰して円盤の形にし、その上にハーバーの山の形をした部分をのせ、周りをさつまいもクリームで円を描くように囲みました。もちろんそのまま食べても美味しいハーバーですが、ちょっとしたアレンジを加えるだけでまた新たな味わいになりました！ダブルマロン味は中にまるごと栗が入っているためモンブランとの相性は抜群です！！地元の顔であるハーバーアレンジレシピに火がつき、元の生活が戻った際に観光が賑わうことを願っています。",
                like: "https://www.instagram.com/p/CBDrzZupax1/"
        },
        {
                title: "にんじんたっぷりポタージュ",
                body: "高校3年<br><br>材料<br>牛乳300cc 水200cc にんじん1本 たまねぎ2分の1 コンソメ5g 塩こしょう少々<br><br>食品ロスを減らすため、給食を食べる機会がなくなったことでたくさん余っている牛乳を使った料理をしました。ポタージュは牛乳を300ccも使うためたくさん消費することができました。にんじんとたまねぎをみじん切りにすることが大変でしたが時間をかけて飲んだ時に違和感がなくなるまで細かく刻みました。牛乳が苦手な方でもポタージュなら牛乳の匂いや味がかき消されるため飲みやすいと思います。我が家でも大好評でした。骨を丈夫にする牛乳だけでなく、にんじんや玉ねぎには生活習慣病の予防にも繋がるため、外出自粛が続き食事や飲酒などを摂り過ぎてしまった人にもオススメです。",
                like: "https://www.instagram.com/p/CBDrzxQJH2B/"
        },
        {
                title: "牛乳だけで、「蘇」をつくってみた！",
                body: "高校3年<br>今回は牛乳だけを使って料理をしました。料理名は「蘇」です。蘇は昔のチーズのような物で、牛乳を煮詰めるだけでできてしまいます！！超簡単！！実際に作ってみると、火が強すぎたらしく、焦げちゃいました（笑）。でも作るのに牛乳を思ったより使用できたのでよかったです!!!!",
                like: "https://www.instagram.com/p/CBDuHE5pgNp/"
        },
        {
                title: "QOL朝ごはん",
                body: "具材:牛乳<br><br>全国の小学校が休校になり、牛乳の消費量が減ってしまっているという情報を耳にしました。コーヒーや紅茶などで牛乳は使うけど、簡単に作れる食べ物でも使えないか？と考え、フレンチトーストを思いつきました。パン1枚につき、100mlの牛乳が使えます。卵と牛乳と砂糖を混ぜて食パンを浸して焼くだけなのでとても簡単でした。そして飲む以外の方法で牛乳が使用できてよかったです。せっかく時間がある休校中なので、何度か朝ごはんとしてつくっています。6人家族なので、6枚作ると600mlの牛乳を使うので、少しは牛乳農家さんに貢献できたかなと思います。",
                like: "https://www.instagram.com/p/CBDuH2FJi_y/"
        },
        {
                title: "スフレオムレツに挑戦",
                body: "卵を使った料理です。簡単にできて、かつ見た目もいいので料理を始めるきっかけになると思います。それが食品ロスの軽減につながればいいなと思いました。",
                like: "https://www.instagram.com/p/CBDuIW9J8sz/"
        },
        {
                title: "レモンでさっぱり！夏野菜トマトスパゲッティ",
                body: "中学3年<br><br>コロナの休校の影響で、昼ごはんを自分で作ることが多くなりました。今まではトーストなどの単純なものばかり作っていましたが、この機会にもっと本格的な料理にチャレンジしてみました！スパゲッティにしたのはTwitterで「牛乳とバターで生クリームの代用が可能」というのを見て（母からのお達しで結局マーガリンになりましたが）興味を持ったからです。「これから熱中症になる人が増えたら医療機関が大変なことになる」というニュースを見たので、熱中症予防のためにクエン酸を含んだレモン汁や夏野菜のトマトを使ってさっぱりとしたスパゲッティに仕上げました。とてもおいしかったので、その日の分散登校の午後の授業も頑張れました！",
                like: "https://www.instagram.com/p/CBGOP2ap_hm/"
        },
        {
                title: "果肉ゴロゴロストロベリージャム🍓",
                body: "うきは産いちご<br><br>緊急事態宣言が発令される前、いちご狩りに行ったのですが、ハウス内のお客さんは母・私・妹三人しかおらず、貸し切り状態でした。収穫している時も周りに人がいないので、寂しいですし、活気がありませんでした😣農家さんに今どのような状態か聞いたところ、「これがいつまで続くか分からないし、苺を廃棄しなくてはいけなくなるのではないか」とおっしゃいました…それを聞いてこの苺をどうしたら破棄されずに済むか考えました。そこで苺を沢山使うジャムを作る事にしました❣️しかし！私は料理が苦手なので、母に横で見守ってもらうことに😅苺自体がとても甘かったので、お砂糖は少なめにしました。",
                like: "https://www.instagram.com/p/CBGOQoEpGZb/"
        },
        {
                title: "スタミナ満点メニューでみんなを笑顔に元気に！",
                body: "高校1年<br><br>卵、トマト、ブロッコリー、じゃがいも、チーズ、ペンネ、牛乳、ゴルゴンゾーラ、、ベビーリーフ、塩、こしょう、強力粉、オリーブオイル、粉イースト、えんどう豆、ごま、お酢、にんにく、レモン、パプリカ、きゅうり、にんじん、大根、セロリ、生ハム<br>br>私は食材の生産者の方にも、家族にも元気になって欲しいと思い作りました。まず、コロナ支援のサイトを見て、母と注文した生ハムと今、大変な状況の牛乳と卵等の乳製品、友人のおじいちゃんに頂いたえんどう豆を使う事を意識しました。又、外出自粛で外食ができないので少し贅沢な食事を、簡単に家にあるもので作ることを意識しました。普段はあまり料理をしない私ですが、料理本などを見ながら自分なりのアレンジを加えて調理しました。パスタのソースの量が少なかったようで、少し薄味になってしまいましたが、全体的には乳製品、訳あり商品を使う！という目標を達成できて良かったです！些細な事ですが、社会と協力できたようで嬉しいです。",
                like: "https://www.instagram.com/p/CBGORGKpBq8/"
        },
        {
                title: "ホタテのバター醤油パスタ",
                body: "新型コロナウイルス感染拡大の影響は、水産業にも及んでいます。北海道の企業生産は、500億円減少すると言われています。かなりの損額で、衝撃を受けました。北海道の名産といえば、ホタテガイです。私はホタテガイが大好きなのに、巨額の損害により、北海道の水産業が破綻してしまうと、北海道の美味しいホタテが食べれないではないか！？と危惧しています。そのような中、このコンテストを発見しました。少しでも、北海道水産業の助けになりたい！、そう思い参加を決心しました！今回は、北海道産のホタテを使ったバター醤油パスタです！バターを贅沢に使いましたが、レモン汁をプラスすることで、さっぱりとして、しつこくなかったです！醤油とホタテの相性はやはり抜群でサイコーに美味しかっです！！ この想いが伝わればなぁとおもいます！！！",
                like: "https://www.instagram.com/p/CBGPFcuJkit/"
        },
        {
                title: "コロナ料理日記",
                body: "コロナ休みに入ってから新しいことを初めでみよう思いご飯作りSNS投稿を始めました。2カ月弱毎日ご飯を作って家族も喜んでくれています！",
                like: "https://www.instagram.com/p/CBI2nStJl0i/"
        },
        {
                title: "Beyondコロナ オムライス〜みんなで乗り越えよう〜",
                body: "高校2年<br><br>使った具材<br><br>・卵(家の商品)<br>・ケチャップ<br>・塩胡椒<br>・鶏がらスープの素<br>・ピーマン<br>・ベーコン<br>・玉ねぎ<br>・ご飯(叔母さんの家の米)<br><br>このコロナによって、うちの卵は取引を中止せざるを得なくなりました。それ故に約1ヶ月ほど収入はゼロ。そんな時にこの企画を知り取り組もうと思い挑戦しました。この時に使ったピーマンと玉ねぎは地元の野菜を使用。米は叔母さんが作っているものを使用させていただきました。今回使わせていただいた食材の売り手の方々は、どうしても地元での販売が主のため、ギリギリで切り盛りしている状況であると思います。だからこそ、こういった機会にこのような食材を使って料理をすることで、少しでも貢献できたと思うと嬉しい気持ちです。少し卵は破れてしまいましたが、美味しくいただけることができてよかったです。ごちそうさまでした。",
                like: "https://www.instagram.com/p/CBGPGhjJq5l/"
        },
        {
                title: "お菓子作り",
                body: "高校1年 〔使った食材〕<br>・牛乳<br>・卵黄<br>・ゼラチン<br>・砂糖<br><br>私は今回、牛乳をたっぷり使ったプリンを作ってみました。材料を4つしか使わないので、とても簡単に作ることが出来ました。鍋に牛乳と卵黄を入れてよく混ぜてから火にかけ、沸騰する直前に火を止めるという作業がありました。そこの火加減とタイミングが少し難しかったですが、上手になめらかプリンを作ることが出来ました。完成後に、家族と一緒に食べたらみんな美味しいと言ってくれたのでとても嬉しかったです。余った卵白は、プリンを作った後にメレンゲクッキーを作る材料として使いました。食材を無駄にすることなく、2つの美味しいスイーツを作ることができたので、良かったです。とても楽しかったです。",
                like: "https://www.instagram.com/p/CBI1NHFpUN3/"
        },
        {
                title: "果物たっぷりゼリー　withハートのミルクプリン",
                body: "高校2年 《使った具材》<br>・キウイフルーツ<br>・メロン<br>・イチゴ<br>・ぶどう<br>・桃<br>・牛乳<br>・砂糖<br>・ゼラチン <br>・サイダー<br><br>《感想など》<br>私は毎年果物狩りに行くほど果物が大好きです。勿論、今年も果物狩りの予定をたてていました。しかし今はコロナの影響で果物狩りができない状況で、旬な果物達は美味しい実をつけているのに収穫されないまま廃棄処分となってしまっています。それは勿体無い！と考え、本来果物狩りで収穫される予定だった果物を通販で購入して使用しました。テレビでは主に給食で使われる食材の廃棄について述べられていますが、実際は他の食材にも影響が出ています。しかし私はそれをネットで調べて初めて知りました。“社会の今”を伝えるのはテレビだけではないということを改めて感じました。なので今後は情報への向き合い方も見直そうと思います。",
                like: "https://www.instagram.com/p/CBI1N-iJnJP/"
        },
        {
                title: "今旬の梅でジュース",
                body: "高校3年<br>梅の旬は6月から7月です。今回は梅をいっぱい使って梅ジュースのシロップを作ります。梅をガラス瓶にいっぱい入れて氷砂糖を後から詰め込みます。あとは待つだけで梅からエキスが出てきておいしい梅ジュースが出来ちゃいます。飲むのが楽しみです。",
                like: "https://www.instagram.com/p/CBI1ORAp6VJ/"
        },
        {
                title: "マグロと野菜のトマト味噌煮",
                body: "私はこのコロナで休校期間中趣味の料理でたくさん作ってきました！材料はマグロ・アスパラ・ブロッコリー・ナス・トマト缶・味噌・オリーブオイル・香辛料（あれば）を使いました。オリーブオイルでナスとマグロを炒めてから塩茹でたアスパラ・ブロッコリーをトマト缶と味噌を入れて煮込んで完成です！そこまで難しくないので誰でも簡単に作れます。トマトと味噌が野菜に染み込んでとても美味しかったです(*^ω^*)",
                like: "https://www.instagram.com/p/CBI2JhFpSTj/"
        },
        {
                title: "自炊に挑戦",
                body: "高校1年<br>長い休みのあいだに自炊に挑戦しました。上の写真は鮭のホイル焼きの夕食です。うさぎ耳のリンゴは大半が耳なしになってしまいました＿|￣|○",
                like: "https://www.instagram.com/p/CBI2KFAJrGI/"
        },
        {
                title: "食品ロス応援ワンプレートランチ",
                body: "主に使用した食材<br>・牛乳<br>・たまご<br>・アスパラガス<br><br>新型コロナウイルスにより、食品ロスが増えているという情報を聞き、今回私は、ポケットマルシェという生産地応援サイトを利用しワンプレートランチを作りました！私の手元に届いた食材から、大切に丁寧に愛情を込めて育てられていることが伝わりました。このような時にも、日本全国には、生産者さんや宅配業者さんのように、頑張ってくれている人がたくさんいるということがわかりました。いつもは何気なく母の作った料理を食べていましたが、改めて食べ物のありがたみを実感しました。そして今回、自分で食材を入手し、作ってみたことで、たくさんの人との関わりを感じることができ、より一層美味しくいただくことができました！",
                like: "https://www.instagram.com/p/CBI2KeJp9KE/"
        },
        {
                title: "おかやまフルーツ飴",
                body: "高校3年<br><br>私の住んでいる岡山県は、日本有数の果物王国です。今の季節も色とりどりの瑞々しい果実が、スーパーや直売所などに並んでいます。それらの果物を使って、家で何か作れないかと考えた際に閃いたのが、このフルーツ飴です。長く、憂鬱になりがちな自粛期間中に心も体も元気になれて、見た目も味も楽しめる、まさに今にぴったりの食べ物だと思います。また作って、皆を笑顔にしたいです。一足先に、お祭り気分を家で味わうことができました。",
                like: "https://www.instagram.com/p/CBLUsK3JE02/"
        },
        {
                title: "牛乳消費クリームブリュレ",
                body: "新型コロナウイルスの影響で給食で出される牛乳が余ってるとニュースで見て、牛乳を使ったプリンをつくりました。私は4人家族なのですが、牛乳でカスピ海ヨーグルトを作って、毎日1リットル消費しています。それ以外にも牛乳を消費する為にプリン、ダルゴナコーヒー、リゾット等を毎日作って楽しんでいます。家にずっといるようになってからは毎日昼食や夕食作りをしています。",
                like: "https://www.instagram.com/p/CBLUsq6p62L/"
        },

        {
                title: "なめらかなぷりぷりプリン",
                body: "牛乳と卵と砂糖でプリンを作りました。写真にあるように6個作るのに、牛乳を300ml使います。底のカラメルが溶けていないものもありましたが、とても美味しかったです。冷蔵庫で冷やしたプリンより、私は温かいままの方が好きでした。家族3人でおやつに食べました！",
                like: "https://www.instagram.com/p/CBLUtEwJ8Y2/"
        },
        {
                title: "イタリアンコース料理作ってみた",
                body: "高校3年<br><br>今回は新型コロナウイルスの影響で売れなくなった魚・牛乳・野菜を使ってイタリアン料理を作りました。外出自粛により美味しいイタリアン料理を食べられない家族のためにも、少しでも外出気分を味わってもらえるようにコース料理をつくりました。どの料理も美味しかったです！",
                like: "https://www.instagram.com/p/CBLWHmFJMnR/"
        },
        {
                title: "食品ロスを無くすために",
                body: "私は「買って応援！食品ロスSOS」というサイトを通じて株式会社サガンベジの野菜等を購入させて頂きました。サガンベジから届いたリーフレタス、ミニトマト、きゅうりはサラダに、小松菜はおひたしに、新玉ねぎとチンゲン菜はスープに、水菜、マッシュルーム、平飼い卵をオムレツにしました。オムレツにはみんなでコロナを乗り越えようという意味を込めて「Fight!」と書きました。作ったものはいつもお世話になっている家族に食べてもらいました。食品ロスという言葉を今回初めて聞いたのですが、私が購入したことで少しでも悪影響を受けてしまった方の役に立てていればと思います。",
                like: "https://www.instagram.com/p/CBLWHkFpqhZ/"
        },
        {
                title: "給食センターを救おう～わかめ編～",
                body: "高校3年<br><br>具材：生わかめ(給食センターの食材購入)<br>(その他の料理：豚のしょうが焼き、赤飯、卵焼き)<br><br>今、学校給食がなくなり、給食にする予定だった食材が膨大な量余っています。そんななか、私の家族は食いしん坊だらけなので、給食の食材を購入することにしました。今までに鯖やホキなどの魚や牛肉などを購入し、給食センターを支援しました。今回は、生わかめ1kgを購入し、自炊してみました。写真に写っているのは味噌汁とサラダです。家族分のご飯を作り、自炊力が上がった上に、困っている給食センターにも貢献できて、一石二鳥の行動ができました。とても良い機会になりました。またこれからもできる範囲で支援していきたいです。",
                like: "https://www.instagram.com/p/CBLWHjNpPVc/"
        },
        {
                title: "らくらくパンスナック",
                body: "高校2年<br><br>改めてこのコロナに対して考えた時私たちだけじゃな、もっと沢山の幅広い人達が困って大変な思いをしていると改めて思い、知り家族でもなんかしてあげたいなと話をしていたのでこのように応援の手紙を書くことが出来て本当に嬉しく思います！",
                like: "https://www.instagram.com/p/CBQlRnqpL5r/"
        },
        {
                title: "こんな時だからこそ",
                body: "私は普段部活や勉強に追われていて、料理をする機会がありませんでした。このコロナの期間、不安が大きく気分も上がらなかったのですが、インスタでお菓子作りの投稿を見て、自分もお菓子作りに挑戦しようと思いました。普段作らないので、スムーズにはいかない部分も多少ありましたが、今はネットでレシピやアドバイスを検索することもできるので、無事にカップケーキを作ることができました。作ったカップケーキは親と一緒に食べて、美味しいと言ってもらえて嬉しかったです。コロナがいつ終息して元の生活が取り戻せるか分からない状況が続いていますが、普段やらないことに挑戦することで気分転換になり、明るい気持ちになることができました。<br><br>具材: 牛乳、卵、チョコレート、無塩バター、ホットケーキミックス",
                like: "https://www.instagram.com/p/CBQlSbCJQYs/"
        },
        {
                title: "牛乳でカッテージチーズケーキ、ホエースープを作ってみた",
                body: "高1<br><br>コロナウイルスの影響で余っている牛乳で無駄なく大量消費かつ食べやすい食べ物はなにかと考えました。考えた末にカッテージチーズでチーズケーキを作る事にしました。そしてカッテージチーズを作る際出てくるホエーで栄養満点のスープを作りました。カッテージチーズは冷えた酢と温かい牛乳の温度差を利用し作ります。初めてカッテージチーズを作った時牛乳の温度を40度で作り失敗したので60度で再チャレンジし成功しました。カッテージチーズ作りの奥深さを知れました。ホエースープは少し酢がきいていてカッテージチーズケーキはチーズ臭さがなく芋ケーキといった印象でした。どれも初めて食べる味でしたが美味しかったです！",
                like: "https://www.instagram.com/p/CBQlTB7pUlU/"
        }

];

const cardsPerPage = 3; // 3個しかデータ写してないのでとりあえず1ページあたり2個
const pageCount = (cardDataList.length / cardsPerPage) + (cardDataList.length % cardsPerPage); // ページ数
let page = 1;
function initialize() {
        /* とりあえず container-fluid 以下のカードを全削除  */
        document.querySelectorAll("#gohan > div > div > div.card").forEach((element) => element.remove());

        /* cardDataListに沿ってカードを作成 */
        for (let i = 0; i < cardsPerPage; i++) {
                const cardImageElement = document.createElement("img");
                cardImageElement.classList.add("card-img", "rounded-1");

                const cardImageWrapperElement = document.createElement("div");
                cardImageWrapperElement.classList.add("col-md-4", "gallery-image");
                cardImageWrapperElement.appendChild(cardImageElement);

                const cardTitleElement = document.createElement("h5");
                cardTitleElement.classList.add("card-title");

                const cardTextElement = document.createElement("p");
                cardTextElement.classList.add("card-text");

                const likeButtonElement = document.createElement("a");

                const cardBodyElement = document.createElement("div");
                cardBodyElement.classList.add("card-body");
                [cardTitleElement, cardTextElement, likeButtonElement].forEach((element) => cardBodyElement.appendChild(element)); // cardBodyElement.appendChild(element) を何回もやってもいいものの面倒なので。

                const cardBodyWrapperElement = document.createElement("div");
                cardBodyWrapperElement.classList.add("col-md-8");
                cardBodyWrapperElement.appendChild(cardBodyElement);

                const cardRowElement = document.createElement("div");
                cardRowElement.classList.add("row", "no-gutters");
                [cardImageWrapperElement, cardBodyWrapperElement].forEach((element) => cardRowElement.appendChild(element)); // cardBodyElement(以下略)

                const cardElement = document.createElement("div");
                cardElement.classList.add("card");
                cardElement.style.maxWidth = "800px";
                cardElement.style.margin = "30px auto";
                cardElement.appendChild(cardRowElement);

                document.querySelector("#gohan > div > div").appendChild(cardElement);

                if (i < cardDataList.length) {
                        // cardImageElement.src = cardDataList[i].likeb + "media/?size=l";
                        cardImageElement.src = cardDataList[i].like + "media/?size=l";
                        cardImageElement.decoding = "async";
                        cardTitleElement.innerText = cardDataList[i].title;
                        cardTextElement.innerText = cardDataList[i].body;
                        likeButtonElement.href = cardDataList[i].image;
                        likeButtonElement.innerText = cardDataList[i].like;
                }
        }
}

async function changePage(page) {
        const offset = page * cardsPerPage;
        document.querySelector("#gohan > div > div").querySelectorAll(".card").forEach((card, index) => {
                card.style.display = cardDataList.length <= offset + index ? "none" : "block"; // データリストの最後より後になる要素はとりあえず非表示に
                if (cardDataList.length <= offset + index) return; // データリストの最後より後は中身がないのでスキップ
                const cardData = cardDataList[offset + index];

                const cardImageElement = card.querySelector("div > div.col-md-4 > img");
                cardImageElement.src = cardData.like + "media/?size=l";

                const cardTitleElement = card.querySelector("div > div.col-md-8 > div > h5");
                cardTitleElement.classList.add("card-title");
                cardTitleElement.innerText = cardData.title;

                const cardTextElement = card.querySelector("div > div.col-md-8 > div > p");
                cardTextElement.innerHTML = cardData.body;

                const likeButtonElement = card.querySelector("div > div.col-md-8 > div > a");
                likeButtonElement.href = cardData.like;
                likeButtonElement.innerHTML = "いいねする";
        });
}

document.querySelector(".btn-group > .prev").onclick = function () {
        page--;
        if (page < 1) {
                page = pageCount;
        }
        console.log(page);
        changePage(page - 1);
        window.location.href = '#main';
};

document.querySelector(".btn-group > .next").onclick = function () {
        page++;
        if (page > pageCount) {
                page = 1;
        }
        console.log(page);
        changePage(page - 1);
        window.location.href = '#main';
};
initialize();
changePage(page - 1);