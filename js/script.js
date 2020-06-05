/* カードの中身
   ちゃんと実装するときはfetchかなにかでJSONを引っ張ってくるべきかと。 */
const cardDataList = [
        {
                title: "From New Zealand",
                body: "私たちは現在、20人でニュージーランドに留学しています。しかし3月24日から約２ヶ月間、ロックダウンが始まり、私たちはホームステイ先での自粛生活を余儀なくされました。外出は散歩のみ、スーパーに入店するのにも人数制限がかけられ、家族以外の人と会うことも許されませんでした。けれど、そんな状況でも、ニュージーランドの人々は相手を思いやり、小さな幸せを色々な方法で作り出していました！そして、私たちはそれを目の当たりにし、日本の皆さんにも伝えたいと思い、動画を作成しました。日本はまだ厳しい状況が続きますが、この動画を見た人が少しでも笑顔になってくれればいいなと思います！Stay home, Stay safe, Be kind Kia Kaha Aotearoa<br>(いいねをすると動画)",
                like: "https://www.instagram.com/p/CBAX6udJjm7/",
                image: "https://instagram.fkix2-1.fna.fbcdn.net/v/t51.2885-15/e35/101454721_848495405642057_7486039140394723542_n.jpg?_nc_ht=instagram.fkix2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=jFSRAowQiIIAX-Tib9N&oh=5457b6ae59637ce99b7fdb7dbde14526&oe=5EDAB3F2",
        },
        {
                title: "未来へ",
                body: "私達は学校が再開することになり、長い自粛生活にも終わりが見えてきました。それは医療関係者の方々が感染拡大を防ぐために頑張ってくださったおかげです。ありがとうございました。私はこの写真を選びました。空はどんな時も違った表情を見せてくれます。だから、刻一刻と変わる状況の中で私達のために頑張ってくださった医療関係者の方々へ感謝の気持ちを伝えたかっからです。また、この写真の雲は煙を出しながら走っている汽車のように見えます。医療関係者の方々はお疲れだと思います。ですが、これからも患者さんのために未来へ向かって走り続けて下さい！",
                like: "https://www.instagram.com/p/CBAV-FcJClG/",
                image: "https://instagram.fkix2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/101644743_284795889373157_7053773590281842179_n.jpg?_nc_ht=instagram.fkix2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=j2-mSikC9UEAX8w4Okx&oh=b652df095049974bd73b651ac39cbc51&oe=5F01A85A",
        },

        {
                title: "感謝のきもち",
                body: "今回の新型コロナウィルスは、みんなが外出せず、人のためにがんばったり、協力しあったことで終息にむかっていると思います。だから、私は「感謝」という言葉をみんなに届けたくて、書きました。家でも勉強ができるようにしてくれた先生に感謝。命がけで治療してくれている医療関係の人に感謝。家にいても欲しいものを届けてくれる宅配の人に感謝。当たり前だと思っていたことがたくさんの人たちの協力のおかげでできていたと気づきました。私は将来、医者になりたいです。私が医者になった後も、今回のようなことがまた起こるかもしれません。そのときは、私がたくさんの人から感謝されるようになりたいです。",
                like: "https://www.instagram.com/p/CBAV9ZgpKl-/",
                image: "https://instagram.fkix2-1.fna.fbcdn.net/v/t51.2885-15/e35/101795738_281715466545858_5778513712770035266_n.jpg?_nc_ht=instagram.fkix2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=L4N3oncnd2YAX9AQFJa&oh=7ea8335ec32beff344e1040c478d0107&oe=5F006778",
        },
        {
                title: "ギター弾いてみた！",
                body: "これはONEOKROCKのnotes'n's wordという曲の前奏です。ちょっと弾けるようになりました！嬉しいです。(いいねをするを押したら動画が見られます)",
                like: "https://www.instagram.com/p/CBAUdC7JrdQ/",
                image: "https://instagram.fkix2-2.fna.fbcdn.net/v/t51.2885-15/e35/101493818_266387348105786_3742057278961676420_n.jpg?_nc_ht=instagram.fkix2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=iEPhmPVrltUAX__zI5A&oh=88fd27b27de32df6cf403aece0ec84cf&oe=5EDB2C80",
        },
        {
                title: "ブルーライト",
                body: "僕は普段人前に出たりするのは苦手ですが。今コロナウイルスの影響で困ってる人や医療従事者の方々を元気づけるために中学3年生から友達とやってきたヲタ芸で応援したいです。もし宜しければ動画も送れます！",
                like: "https://www.instagram.com/p/CBAUcw9pDKk/",
                image: "https://instagram.fkix2-2.fna.fbcdn.net/v/t51.2885-15/e35/101358223_560928064567719_6264193957856616103_n.jpg?_nc_ht=instagram.fkix2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=CSOQQQAZ21QAX8qUIKm&oh=46e2ef15ae662b78d2c378423e148fef&oe=5F00E192",
        },
        {
                title: "心からの感謝を込めて",
                body: "高校3年<br>昨今、世界規模で猛威をふるっている新型コロナウイルス感染症。なかなか先行きが見えない中、日本だけでなく世界中の医療従事者といった方々は恐怖や不安でいっぱいの私たちを身体的かつ精神的に、懸命に支えてくださっています。ですから私も、何か自分にできることをと思い、この長い自粛期間を利用して、心から感謝の気持ちを込めて、フラワーアレンジメントを手作り致しました。作成するのは結構難しかったですが、ほんの少しでも心の疲労等を癒し、明るくすることができたなら、これ以上幸せなことはありません。僭越ながら私自身も、人々の心に寄り添い、世界で活躍できる様な医療人を目指すべく、精進していきたいと強く思っております。",
                like: "https://www.instagram.com/p/CBAUcPnp37W/",
                image: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/102417102_824363211300803_7896681157436957890_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=m5Db1lRruBQAX93txjd&oh=6a42f9a4dbb4fa73564e0d45ae591bc0&oe=5F02F9E1",
        },
        {
                title: "アリガトウゴザイマスク",
                body: "高校2年<br>私は小さい頃から医者になりたいという夢があります。ドラマ等から、医療現場はキラキラ世界というイメージがありました。でも、コロナウイルスで医療従事者の方たちは、治療をするのも大変なことですが、差別を受ける方も一部いるということを知り、本当にきつい思いをしていることを知りました。そんなニュースを沢山見て、それでもなお患者さんの命を救おうと懸命に治療にあたるお医者さんたちを心からかっこいいと思い、より一層医者になりたいと思えるようになりました。作品の着想を得てからは、まずマスクの絵を書くところから練習しました。この作品、私の思いが、医療従事者の方に届けば嬉しいなと思います。",
                like: "https://www.instagram.com/p/CBANYFBpUdI/",
                image: "https://instagram.fkix2-2.fna.fbcdn.net/v/t51.2885-15/e35/101853078_259700475443643_405771910473238582_n.jpg?_nc_ht=instagram.fkix2-2.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Xp3ThQzG0VkAX_6Ez5n&oh=1c3be3568f69e79a1580cef02dd12e19&oe=5F021332",
        },
        {
                title: "拝啓、医療関係者の方へ",
                body: "高校2年<br>多くの人が自宅待機や自粛、テレワークをしている中、医療関係者の方は、現場で日々目に見えない敵と戦っています。今回私はそんな人たちのことを思って書きました。書いてみると、一人ひとりが外出を控える意思が大切なんだと、感じるようになりました。外出することで感染する可能性が高まり、医療崩壊が現実味を帯びてきます。医療現場で頑張っている人たちについて考える機会ができてよかったです。",
                like: "https://www.instagram.com/p/CBANRWdJgQG/",
                image: "https://instagram.fkix2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/101513754_144607280521842_7158103066976669115_n.jpg?_nc_ht=instagram.fkix2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=nKpMmVC88v4AX9uk-1r&oh=381baef3158341958f9c88da3adddfe8&oe=5F0058F9",
        },
        {
                title: "姉妹でバイオリン",
                body: "私は小さい頃から妹と一緒にバイオリンを習っています！最近はお互い忙しすぎて一緒に弾いたりしていなかったんですが、今回時間もできたので愛の挨拶という曲を練習して弾けるようになりました！親戚の人たちに元気を与えられるようにその動画を送っています！愛の挨拶を選曲した理由は今の状況で私たちに必要なものは大切な人を思う愛だと思ったのでこの曲を選びました！もっと沢山の周りの人たちを笑顔にできるように曲に磨きをかけたいと思います！",
                like: "https://www.instagram.com/p/CBANP3CpIUb/",
                image: "https://instagram.fkix2-2.fna.fbcdn.net/v/t51.2885-15/e35/101534719_110185963914710_8097949445603683078_n.jpg?_nc_ht=instagram.fkix2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=wfnq-Eq3j8YAX--V5z_&oh=e1a80ef838d60c019ecb4590d45f4431&oe=5F01F91A",
        },
        {
                title: "みんなで明るい未来を勝ち取ろう！",
                body: "今は世界中でコロナが蔓延して本当に大変になっている中で、自分の身を危険にさらしてまで最前線で戦って下さっている医療従事者の方々、私達の生活が止まらないようにお仕事を続けて下さっている方々に感謝の気持ちでいっぱいです。皆さん、本当にありがとうございます。皆さんのおかげで私たちは今を生き抜くことができています。この大変な局面で、大きなリスクを背負ってまで一生懸命働いて下さっている皆さんのリスクを少しでも減らすため、安心できる生活を少しでも早く取り戻すため、大切な人を守るため私達も手洗いうがい、マスクの着用など自分にできることを１つずつ続けていきたいと思います。みんなで明るい未来を勝ち取りましょう！",
                like: "https://www.instagram.com/p/CBANN01p01L/",
                image: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/101498918_139978657660307_312607626152703243_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=-v-7dfPq6xsAX_TSGjN&oh=80bb7d7636c812d112353acaa39253a1&oe=5F023C60",
        },
        {
                title: "For a Bright Future",
                body: "新型コロナウイルス感染拡大で、私たちは長い自粛生活の中、一時は光の見えない暗いトンネルを歩いているような生活を送っていました。緊急事態宣言が解除された今でも、第2波、第３波に怯えながら暮らしています。世界にもまだ一時の私たちのように、暗いトンネルの中にいる人々もいるかもしれません。安心して過ごすことは出来ない現状で世界中の人々が不安を抱えていると思います。そこで、私は明るい未来が来ますように、このランタンの光のような希望の光が見えますように、そのような思いでこのようなランタンを作りました。このランタンを見て、1人でも多くの人が明るい未来に向かって希望を抱いてくれれば幸いです。",
                like: "https://www.instagram.com/p/CBANM_yJkYM/",
                image: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/75501167_903888843371192_4462843402074929919_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=108&_nc_ohc=dM6KXzFrRNAAX87S9qF&oh=ea1e4a13d7e2c359c5f03b8047f80e90&oe=5F0225E5",
        },
        {
                title: "医療関係者の皆様へ",
                body: "このような時期に毎日毎日新型コロナウイルスと戦い、現場で働いてくださり本当にありがとうございます。私の父も医療関係者です。この前、父にメールを送るときに飼い犬の写真を一緒に送ってあげたら、とても喜んでくれました。なので今回も、動物などの癒しになる写真を見たら、皆さんが少しでも元気になるのではないかと思い、この写真を投稿することにしました。医療関係者の方々、本当にありがとうございます。お体に気をつけてこれからも頑張ってください。応援しています！いつもありがとうだワン🐶🐾",
                like: "https://www.instagram.com/p/CBANLtpJBVS/",
                image: "https://instagram.fkix2-1.fna.fbcdn.net/v/t51.2885-15/e35/101487563_2906961319381926_7337693202622192824_n.jpg?_nc_ht=instagram.fkix2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=lYQNg2YxZdEAX9QmGU3&oh=87aded53c2d509c2e0367eb53abdf73e&oe=5F033A78",
        },
        {
                title: "運送業者様への感謝の手紙",
                body: "高校2年<br>「不要不急の外出を避けるために通販を利用しよう」その言葉が増えれば増えるほど運送業者の方は追いつめられてしまう。しかし、その言葉を無視して近くの店に出向くと自分を追い詰めることになってしまう。コロナに関わらず何かをするということは誰かが楽になる一方で誰かが苦しくなるということだと私は思います。だからこそ、通販を利用して商品を“配達していただく”側の私たちは運送業者の方へ感謝しないといけないのではないか？と感じ、手紙を書くことにしました。手紙という媒体を使って言葉を綴ることで自分の生活は自分自身だけでなく自分以外の他者のおかげで成立するところもあるのだと感じさせられました。",
                like: "https://www.instagram.com/p/CA9733AppFN/",
                image: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/101671401_674852646626045_9147311387108468941_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=dxzCsY9AEs4AX924wl4&oh=7edc318cca9c758a601865cfc85e3b99&oe=5F01D04C",
        }, {
                title: "皆で乗り越えて笑顔になりましょう",
                body: "私は、感謝の気持ちと応援をしていることを医療従事者の方々や私達の生活を支えてくださっている方々また、現在コロナウィルスと闘っている患者さんに伝えたくてこの作品を作りました。またこの作品を見て、笑顔にもなってもらえたら嬉しいなと思います。私には命を救うことなど何もできませんが、こうして感謝の気持ちや応援の気持ちを表現することができたことに嬉しく思います。そして、自分も一緒になって頑張りますということも伝えられたら良いなと思いました。そして、鶴は人々の長寿という縁起であることから一人一人が長生きして欲しいなあという思いで折りました。皆でこの大変な時期を互いに感謝し合いながら日々を送っていけることを願っています。",
                like: "https://www.instagram.com/p/CA97sXwpHXB/",
                image: "https://instagram.fkix2-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/102380986_119048816220832_986723799065904019_n.jpg?_nc_ht=instagram.fkix2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=KbFfHpAgx6QAX9phtCr&oh=62a01b1b1c1c13af2e1ba35b5919a2e4&oe=5F01130C",
        },
        {
                title: "主婦（女性）の皆様へ",
                body: "高校2年<br>改めてこのコロナに対して考えた時私たちだけじゃな、もっと沢山の幅広い人達が困って大変な思いをしていると改めて思い、知り家族でもなんかしてあげたいなと話をしていたのでこのように応援の手紙を書くことが出来て本当に嬉しく思います！",
                like: "https://www.instagram.com/p/CA97sAaJQ9e/",
                image: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/101397048_558337458446421_3179069105347003513_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=hAQ9yBlRbEIAX-XOwlS&oh=fb908f6368bfe0317d2d165c7cff576b&oe=5F024A1F",
        }, {
                title: "介護職の方にも感謝を",
                body: "高校3年<br>COVID-19と毎日闘っている医療関係者の方々に感謝を込めて飲食店での無料サービスは多くみられます。しかし、COVID-19の危険性は医療関係者だけでなく介護職の方々にも迫っています。この状況も関係なく、高齢者の方を介護するために濃厚接触は避けられず日々怯えながら仕事へ向かっていると介護職の方からお話を聞きました。そんな毎日笑顔でお仕事に取り組んでいる介護職の方にも感謝とサービスを提供してほしいという思いから、サービスなどを行なっているお店のドアに貼ってもらうステッカーのデザインを考案しました！直接的なお力添えはできませんがこれで少しでも喜んでもらえたり、癒しになれば幸いです。",
                like: "https://www.instagram.com/p/CA97r7bJCYQ/",
                image: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/101554553_258358435423285_3869333047455482732_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=mEqrsEEaG-gAX8v0fzu&oh=0529c7cfd4f3833bae8b29a8fb67dce2&oe=5EFF76AE",
        },
        {
                title: "命を支えること",
                body: "私は「みんな誰かに支えられている」ということを伝えたくて、この作品を描きました。私は、それを花に例えました。水や太陽の光、土に支えられて美しい花を咲かせているのと同じで、医療従事者や宅配便業者の方々、政治家、そして家族にも支えられています。だから、私たちの命の花は誰かに支えられていて、私たちは誰かを支えられる存在にならなければならないのです。誰かを支えるというのは、誰にでもできると思います。「頑張ろう」「ありがとう」その一言が「命を支えるコト」なのです。",
                like: "https://www.instagram.com/p/CA97rAdJvZu/",
                image: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/101342359_183597186312601_6197778231171528420_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=I-Is7udlRz4AX8JjEBi&oh=9b5de34283e380bf494246d1e4cf179b&oe=5F02A232",
        },
        {
                title: "ツワブキの花",
                body: " 私は美術は、得意ではないけど、私達の知らないところでいろんな人がコロナのために戦ってくれています。今、コロナをなくすための薬を作っている方達、たくさんのお店の方達、みんなが頑張っています。なので、私も微力だけど、誰か一人でも支えれたらいいなと思って、花の絵を書きました。この花の名前はツワブキという花です。大体の方は知らないと思います。私もこの花を書くまでは知りもしませんでした。この花の花言葉は、「困難に負けない」です。ツワブキは、日陰に多く見られる花です。だけど、常に緑色の葉っぱを茂られている丈夫な花なのです。この健気な姿、知りもしなかった花、私達の知らないところでこんなに頑張って生きています。なら私達も頑張ろうという気持ちにさせてくれる花です。なので、この花を描きました。",
                like: "https://www.instagram.com/p/CA97rFnJ6i0/",
                image: "https://instagram.fkix2-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/101423043_145147030444240_3907860687004510092_n.jpg?_nc_ht=instagram.fkix2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=D_YFksfvHNEAX9zpjSj&oh=bc582be460847e02581bbe3fab5d6165&oe=5F019193",
        },

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
                        cardImageElement.src = cardDataList[i].image;
                        cardTitleElement.innerText = cardDataList[i].title;
                        cardTextElement.innerText = cardDataList[i].body;
                        likeButtonElement.href = cardDataList[i].image;
                        likeButtonElement.innerText = cardDataList[i].like;
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
                cardImageElement.src = cardData.image;

                const cardTitleElement = card.querySelector("div > div.col-md-8 > div > h5");
                cardTitleElement.classList.add("card-title");
                cardTitleElement.innerText = cardData.title;

                const cardTextElement = card.querySelector("div > div.col-md-8 > div > p");
                cardTextElement.innerText = cardData.body;

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