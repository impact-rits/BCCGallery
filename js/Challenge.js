/* カードの中身
   ちゃんと実装するときはfetchかなにかでJSONを引っ張ってくるべきかと。 */
const cardDataList = [
        {
                title: "新たな一歩",
                body: "私は今までお母さんに任せっきりだったお弁当作りにチャレンジしてみてました。これはいつも仕事を頑張ってくれているお父さんに作りました工夫した点は、お仕事を頑張ってと言う応援メッセージとして『ファイト』と海苔でメッセージを作った点です。苦手意識が強かった卵焼きにもチャレンジしました。日頃の感謝も伝えられたので良かったです！",
                like: "https://www.instagram.com/p/CBQnyUiJDTl/"
        },
        {
                title: "はじめてのまともなクッキング",
                body: "高校3年<br><br>ドリアを作りました。昨日のご飯がスパゲッティだったんですけど、ミートソースが余ってしまいどうせだったらまともな料理した事なかったししてみよー！ってことでミートソースを使ったドリアを作りました。コンソメとか使ったんですけど何が何かわからなかったです。でも美味しかったからOKです！",
                like: "https://www.instagram.com/p/CBQnz4rp1rB/"
        },
        {
                title: "初オールミミールクッキー",
                body: "高校3年<br><br>オートミールクッキーを初めて作りました。今の状況で外に出ることがほとんどなくなり、運動量が減った人が多いと思います。私もそのうちの一人で、自粛前よりも体重が増えてしまいました。「痩せよう！」と決意し、ご飯を食べることをやめようとしたのですが、学校再開を迎えようとしている今、第二波に備え、免疫力を高めるために食事は取らないといけないと思いました。そんな時オートミールに出会いました。オートミールはダイエット効果があるため、日本でも徐々に人気が高まってきています。私はクッキーがすきなので、なんの苦もなく食べられました。料理の知識は全く無いですが、これを機に食に気を遣って行こうと思います！",
                like: "https://www.instagram.com/p/CBQn0QwpZcq/"
        },
        {
                title: "妹たちとお菓子作りに挑戦してみた！",
                body: "高校2年<br><br>私は普段部活で料理をする機会が全然なかったので、私はこの休みにお菓子作りをすることを決めました。作ったのはアーモンドタルトとソーダゼリーです。途中材料を間違えてしまうというハプニングもありましたが、なんとか完成しました。工夫したのは余ったアーモンドタルト生地でサブレも作ったことです。とても楽しく料理できました。初めて２つの料理を並行して作ったのですが２つとも成功したのはとても嬉しかったです。次はご飯作りに挑戦したいです。",
                like: "https://www.instagram.com/p/CBQo6w5pcNI/"
        },
        {
                title: "点心を始めて、食事観が転身！",
                body: "私は今まで料理をしたことがありませんでした。ですが、せっかく自由に使える時間がでたので何かやってみようと思い、難易度が高めの餃子に挑戦してみました！<br>また、お店が閉まっているため余っていた良いお肉を使ったので、僅かながらお役に立てたと思います！初めては、真っ黒に焦げたり、皮が剥がれたりしてしまいましたが、5月中に15回も餃子を作り、画像の通り綺麗に焼くことができました！この経験の中で他の料理にも興味が湧き、食べる時も作る側の視点を知ったため、食事がよりいっそう楽しくなりました！挑戦して良かったと心から思います！",
                like: "https://www.instagram.com/p/CBQo7Ljp7nO/"
        },
        {
                title: "感謝を届ける",
                body: "毎日、会社のある父のためにお弁当を持っていってます。お弁当の中身は妹が作っています。最初は母と協力しながら作っていましたが今はすっかり一人で作れるようになっています。私はstay homeの中気晴らしで外に行く良い機会なので毎日欠かさず、家に来ている留学生と一緒に届けに行きます。お弁当を持っていくと父はとても喜んでくれます。この機会にいつも私たち家族のために働いてくれている父に感謝の気持ちを届けたいです。",
                like: "https://www.instagram.com/p/CBQo7qnphCh/"
        },

        {
                title: "いただきます",
                body: "高校3年<br><br>見るのも食べるのも大好きな魚。外出自粛期間中に、自分でイチから調理することにチャレンジしてみました！刃を入れるとき、泳いでいた姿そのままの魚を前にして若干の緊張を覚えました。「命」をいただく、ということをこれほど意識したことはなかったように思います。「いただきます」と無意識に呟きながら調理していました。コアジは大好物のアジフライに、イサキは煮付けに。食卓から、旬を、季節を感じることができました。<br><br>今回、ネット上で捌き方や美味しい調理方法も学べるので、初めてでも挑戦できることが分かりました。今回と同じおまかせ鮮魚パックを毎週お願いすることにしたので、これからの旬の魚との出会いが楽しみです！",
                like: "https://www.instagram.com/p/CBTJyCxpDxX/"
        },
        {
                title: "料理等番Bot",
                body: "高校3年<br><br>コロナ休校で家族が全員家にいる期間が長く続きました。「ゴミ出して」「昼ごはん誰が作る？」「お風呂洗って」という風に、家事を誰がやるのかと僕の家ではしばし問題になります。皆さんの家庭でもあるのではないでしょうか。そんな家事の分担で揉める生活はもうやめましょう。このLINE公式アカウント「料理当番Bot」を友達登録し、ボタンを押したり、家族ライングループに招待して「当番発表」と送信するだけで勝手にルーレットを回して通知してくれます。Botを僕の家族グループに招待してからと言うもの、みんなが役割をこのBotで決めるようになり、家事分担の揉め事は１つも無くなりました。ゲーム感覚で利用することができるのでおすすめです。",
                like: "https://www.instagram.com/p/CBTJyiWJg4g/"
        },
        {
                title: "H2Aロケット",
                body: "高校1年<br><br>家にうまく消せない消しゴムがいくつかあったので、私は今回カッターを使って消しゴムアートに挑戦しました。私は宇宙が好きなので、ロケットを作りました。ただ細かい作業が苦手で、集中力があまりないので、１回目に作ったときは横の小さい部品が取れてしまったり色を綺麗に塗れなくて苦労しましたが、3回目に作ってやっと上の写真のような形にまでなりました！消しゴムアートは思ったより難しくて時間がかかりましたが、自分が納得するまで作れたので楽しかったし、集中力にも少し自信がつきました。細かい作業はもう少し上手になるように頑張って、また挑戦したいと思います！",
                like: "https://www.instagram.com/p/CBTJy9fpwgE/"
        },
        {
                title: "2分間のケガ予防体操",
                body: "高校3年<br><br>COVID-19の影響で自宅で過ごす人が多いため運動する機会が減っています。そこで終息後の突然の運動・スポーツで怪我をしないために自宅で簡単にできる「2分間のケガ予防体操」というものを考案しました！！自分自身が前十字靭帯を損傷し、手術後8ヶ月のリバビリトレーニングの中でトレーナーさんや理学療法士さんから教わったことを元に、“誰でも楽しくケガ予防”にこだわって子供も高齢者の方でもやりやすいよう音に合わせた体操にしました！体操を作ることはとても楽しく、自分の辛い経験が誰かの幸せに変わることを嬉しく思いました。この体操を広めて1人でも多くの人の怪我を予防したいです！",
                like: "https://www.instagram.com/p/CBTKmKdJV0h/"
        },
        {
                title: "おうち時間で世界を平和に‼︎",
                body: "コロナウイルスの影響で、おうち時間を楽しく過ごす方法が模索されました。そのなかでぬりえを楽しむ人が増えました。そのぬり絵を、国際協力のために使えないか、楽しんでいるだけでこの閉鎖的な時期に国際協力ができないか、と考えて「ぬりえで協力!!プロジェクト」を始めました。このプロジェクトではぬりえを塗ってもらい、スキャンして送ってもらったものを私たちが切り貼りして、バングラデシュのこどもたちが数字の概念を学べる教材にします。現在、多くの方に参加していただいて、28冊が完成しました!直接コロナウイルスの状況に関係することではないですが、このコロナが終わったときに、バングラデシュのこどもたちがまた質の高い教育を受けられる第一歩を作れたのではないかと思います!!<br><br><a href='https://sites.google.com/view/kikkakedukuri2020/%E3%83%9B%E3%83%BC%E3%83%A0/%E3%81%AC%E3%82%8A%E3%81%88%E3%81%A7%E5%8D%94%E5%8A%9B%E3%83%97%E3%83%AD%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88'>ぬりえで協力！！ ページリンク</a>",
                like: "https://www.instagram.com/p/CBTKndvpFA1/"
        },
        {
                title: "Beyondコロナ~再興(彩光)~",
                body: "高校3年<br><br>普段、墨絵という白黒の世界を描いているんですが、それがコロナで閑散として色を失った現状とマッチしていると感じました。そこでコロナが収束して賑わいが戻ることを願い、色を取り入れることにチャレンジしました。後ろから光を当てると色が着く仕組みになっています！描く題材も皆が上を向いていけるようライトアップされる通天閣にしました！この作品が多くの人の目にとまり少しでも明るい気持ちになってほしく応募しました！このような機会を設けていただきありがとうございます！<a href='https://www.instagram.com/p/CBTKofFp7Lk/'>動画を見る</a>",
                like: "https://www.instagram.com/p/CBTKofFp7Lk/"
        },
        {
                title: "私の家での研究",
                body: "私は昔から東京ディズニーリゾートが大好きで、このコロナの機会に色んなことを知りたいと思い本やネットや辞書を使い、研究しています。例えば、イタリアがモチーフのエリアでしたらその元となった土地について調べたり、どのアトラクションがどの企業がスポンサーなのかを調べて覚えたりしています。",
                like: "https://www.instagram.com/p/CBVseXIpjGW/"
        },
        {
                title: "Thank you〜ブ",
                body: "自分はルービックキューブが大の苦手です。そこで医療関係者の皆様への感謝、自分へのチャレンジを兼ねてやってみました。<br>このルービックキューブはもともと完成していた物にメッセージを書き、バラバラにしもう一度組み直しています。戻し方をYouTube等ネットで調べたりもしました。<br>途中で分からなくなる等のトラブルもありました。完成まで2日間かかりました。でもチャレンジして良かったです‼︎医療関係者の皆様ありがとうございます。<br>(写真は組み直した後のものです)",
                like: "https://www.instagram.com/p/CBVsevUJ3nL/"
        },
        {
                title: "Let’s think about今だからこそ出来る事",
                body: "私は元々英語が苦手でした。高校受験の際は英語が足を引っ張ってしまい、本命の公立高校に合格することはできませんでした。そんな私ですが高校生になり、先輩や同級生が世界に出て活躍していることに刺激を受けました。それからというもの、小さいことに悩まずもっと広い舞台でに出たいと強く思うようになりました。コロナによって現在世界的な繋がりは薄れていますが、今こそ自分の語学力を高めるときだと思い、英検一級の勉強を始めました。私は2ヶ月で印刷が薄くなるほど単語帳を使い込みましたが、皆さんにもまだまだ出口の見えないコロナに負けずに、自分をみつめる時間ができた今だからこそやれる事に打ち込んで欲しいです。そんなきっかけになればと思い、今回応募させていただきました。",
                like: "https://www.instagram.com/p/CBVsfGTJQYB/"
        },
        {
                title: "パソコンへの挑戦",
                body: "高校1年<br><br>私は休校期間中にパソコンの勉強を始めました。始めた理由は、以前からパソコンに興味があったのと、将来パソコンを使う職業に就くかもしれないと考えたからです。学校に行っているときは中々手をつけられなかったので、時間がある今は良い機会だと思いました。しかしただ勉強するだけではモチベーションが下がってきてしまうので、Microsoft Office Specialist のWordに合格することを目標にしました。今までWordを使ったことが無かったのでわからないことがたくさんありましたが、無事合格出来ました。今はExcelを勉強中です。学校が再開しても勉強を続けて、もっと色々な機能を使えるようになりたいです。",
                like: "https://www.instagram.com/p/CBVtG13JoV2/"
        },
        {
                title: "ラミネートと3Dプリンタを使用したフェイスシールドの寄附",
                body: "中3<br><br>今回はラミネートと3Dプリンタを使用したフェイスシールドの作成に挑戦しました。ネットには3Dプリンタとクリアファイルで作成するフェイスシールドの記事はたくさんありますが、様々な素材で試作した結果、透明度が高くコストも低いラミネートを使用したフェイスシールドが最も良いと考えました。フィルムの間には医療・介護従事者の方々への応援メッセージの意味を込めて「Beyond COVID-19」の文字を書いたシールを視界を遮らないところに貼りました。そしてこのフェイスシールド30個を住んでいる市に寄附しました。今の世の中で今後も役に立てるものを作りたいと考えています。",
                like: "https://www.instagram.com/p/CBVtHY0pJpB/"
        },
        {
                title: "音楽で笑顔を輝かせよう",
                body: "高２<br><br>家にある楽器をフルに使って音楽で元気を届けられるように1人で曲を演奏したいと思います！学校から持って帰っている物もあり、この期間だからこそ挑戦できることです。サックスが1番難しくて苦戦中ですが頑張りたいと思います。楽器の名前は<br>カホン　ベース<br>コントラバス　アルトサックス<br>アコギ　ピアノ<br>です",
                like: "https://www.instagram.com/p/CBVtHsFpros/"
        },
        {
                title: "目指せ！1000ピースパズルの完成を！",
                body: "高校1年<br><br>自粛期間という事で家にいる時間が多くなると思います。そのため、スマホやパソコン、テレビなどブルーライトをたくさん浴びる時間も増えることでしょう。私も最初はそうでした。家にいて、することが無く、何時間もスマホを触って、頭と目が痛くなるばかりの日々でした。そこでブルーライトを使わない、且つ、今まで自分があまり挑戦したことのなかったものは何があるかと考えた時に、パズルを思いつきました。パズルは、脳を活性化させ、集中力や記憶力といった能力を伸ばしてくれます。また、ピース数がより多いほど、難しめなパズルほど、毎日少しずつ、時間と日にちをかけて取り組むことができるので、今のこの期間にとてもピッタリなツールだなぁと思い、この1000ピースパズルに挑戦してみました！まだ途中で難しいですが、完成できるように頑張りたいと思います！！",
                like: "https://www.instagram.com/p/CBYgSHQJqeH/"
        },
        {
                title: "おどってみる会ONLINE】 〜１人でも多くの孤独感を払拭するために〜",
                body: "私は毎日「おどってみる会ONLINE」を行なっています！コロナの社会の状況で、世界中で人が物理的に集まれずに、孤立している今だからこそ、それぞれの場所から身体を使って自分を表現し、同じ時間を共有することで精神的な居場所づくりを目指しています。全国から誰でも参加できるもので、子供から主婦やサラリーマンの方まで参加していただいてます！これが楽しみで生きてるとまで言っていただくほど大好評です。また学校に行けなく寂しい思いをしている子どもたちのためにと、小学生向けにも行いました。友達に会えたり身体で遊ぶことができとても楽しんでくれました。この状況でも努力すれば誰かを幸せにできるのだと気づかされました！#ビヨンドコロナ",
                like: "https://www.instagram.com/p/CBYgS0aJ0vR/"
        },
        {
                title: "障害もコロナも乗り越える",
                body: "私はこの期間で何かに挑戦したいと思い指文字について調べ実際に使って「Beyond CORONA」を表してみました！調べてみるとアルファベットは文字の形から出来ていたり、ひらがなの「ゆ」は温泉のマークを表していたり、「ね」は木の根っこが由来になっていたりと面白いものが沢山ありました。自分の手を動かしてやってみると上手く形が作れなかったりと難しさを感じました。以前聴覚障害者の方と交流する機会がありその時には介護士の方を通してでしか話すことが出来なかったのですがこれから手話などと一緒に指文字を覚えていけばコミュニケーションも取れるようになると思うので、練習を重ねて使えるようになりたいと感じました。",
                like: "https://www.instagram.com/p/CBYgTZVpezH/"
        },
        {
                title: "希望の灯",
                body: "高校3年<br><br>私は猫が大好きで、家で猫を1匹飼っています。その猫が自粛期間中、不安な思いで日々過ごす私の心を癒し、明るくしてくれている様に、コロナ感染症の蔓延により先行きがなかなか見えない暗い雰囲気の世の中に再び明るさを取り戻して欲しいという希望の念を込めて、飼い猫をモデルに、この猫のランプシェードを作りました。作成するのがかなり時間を要し、難しかったですが、皆さんの心を明るくする一助になれば幸いです。",
                like: "https://www.instagram.com/p/CBa5GqApr_j/"
        },
        {
                title: "今私たちにできること〜献血〜",
                body: "高校3年<br><br>いま僕にできることは何か考えたときに、新聞記事でコロナのせいで献血が足りてないというのを見ました。そこで去年17歳になって400ml献血ができるということで、人生初の献血にチャレンジしました！",
                like: "https://www.instagram.com/p/CBa5I5WJ84H/"
        },
        {
                title: "君の想いは自粛するな",
                body: "こちらの作品は、568枚の想いの紙を集めて作成したモザイクアートです。コロナ自粛期間中に、多くの方が、外出できませんでした。だからこそ、そのような方々に、その期間を活かして、自分自身と向き合い、「自分の将来」「自分の本当にやりたいこと」「コロナが終わったらやりたいこと」などの想いを紙に書いてもらいました。そして、そのような、みんなの想いの籠った紙を567（ころな）枚以上をオンライン上で集めて、一つの作品、モザイクアートにしました！！！この作品を、コロナを社会全体で超えていける象徴にしていきたいです！！ #チャレンジ部門",
                like: "https://www.instagram.com/p/CBa5KF7pItF/"
        },
        {
                title: "銃の的",
                body: "外出自粛の影響でエアガン（10歳以上用）を外で打てなくなり（バイオBB弾）家でしか打てない状況になったけれど、家で打つと家中にBB弾が散らばってしまうので的を作ってみました。タオルで威力を吸収して一つの場所に集まるように工夫しました。",
                like: "https://www.instagram.com/p/CBa5pTMJi4a/"
        },
        {
                title: "オンライン英会話にチャレンジしました！",
                body: "私はオンライン英会話にチャレンジしました！元々興味はあったのですが中々1人で外国の方と話すのは勇気がいっていますまでできませんでした。でも今回の自粛期間中の時間を有効的に使いたと思い始めました。うまく自分の話したことが伝わったかは分からないけど、楽しく英語で話せました！",
                like: "https://www.instagram.com/p/CBa5qpaJsd9/"
        },
        {
                title: "オンラインイベント三昧",
                body: "自粛期間中は、学校や友達からオンラインでの講義やイベントなどに誘われました。参加したものはOECD主催のe2030workshopという英語での会議、APUの学生との会議×2回、週1回の異文化交流会、APUの教授によるセミナー、TEDxYouthオンラインなどです。英語で会議が進められるものも多く、最初はやめようと思っていたものも多くありました。しかし、ここで踏み出せない自分は格好悪いと思い、沢山のイベントに挑戦しました。オンラインならではの利点も欠点も見つけられた上、自分自身を成長させることができたと思います。",
                like: "https://www.instagram.com/p/CBa5sEXplWD/"
        },
        // {
        //         title: "",
        //         body: "",
        //         like: ""
        // },
        // {
        //         title: "",
        //         body: "",
        //         like: ""
        // },
        // {
        //         title: "",
        //         body: "",
        //         like: ""
        // },
        // {
        //         title: "",
        //         body: "",
        //         like: ""
        // },
        // {
        //         title: "",
        //         body: "",
        //         like: ""
        // },
        // {
        //         title: "",
        //         body: "",
        //         like: ""
        // },
];

const cardsPerPage = 3; // 3個しかデータ写してないのでとりあえず1ページあたり2個
const pageCount = (cardDataList.length / cardsPerPage) + (cardDataList.length % cardsPerPage); // ページ数
let page = 1;
function initialize() {
        /* とりあえず container-fluid 以下のカードを全削除  */
        document.querySelectorAll("#ouen > div > div > div.card").forEach((element) => element.remove());

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

                document.querySelector("#ouen > div > div").appendChild(cardElement);

                if (i < cardDataList.length) {
                        // cardImageElement.src = cardDataList[i].image;
                        cardImageElement.src = cardDataList[i].like + "media/?size=l";
                        cardTitleElement.innerText = cardDataList[i].title;
                        cardTextElement.innerText = cardDataList[i].body;
                        likeButtonElement.href = cardDataList[i].image;
                        likeButtonElement.innerText = cardDataList[i].like;
                        likeButtonElement.innerHTML = "いいねする";
                }
        }
}

async function changePage(page) {
        const offset = page * cardsPerPage;
        document.querySelector("#ouen > div > div").querySelectorAll(".card").forEach((card, index) => {
                card.style.display = cardDataList.length <= offset + index ? "none" : "block"; // データリストの最後より後になる要素はとりあえず非表示に
                if (cardDataList.length <= offset + index) return; // データリストの最後より後は中身がないのでスキップ
                const cardData = cardDataList[offset + index];

                const cardImageElement = card.querySelector("div > div.col-md-4 > img");
                // cardImageElement.src = cardData.image;
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