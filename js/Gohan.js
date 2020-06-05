/* カードの中身
   ちゃんと実装するときはfetchかなにかでJSONを引っ張ってくるべきかと。 */
const cardDataList = [

        {
                title: "夏先取りトマトスムージー",
                body: "高校3年<br><br>材料 牛乳、トマト、はちみつ、ヨーグルト<br><br>現在コロナウイルスの影響で給食を食べる機会がなくなったため、牛乳が食品ロスの問題の１つとなっています。私たちのために酪農家さんが丹精込めて作ってくださった牛乳を無駄にしないために牛乳をトマトスムージーにアレンジしました。これからの夏にピッタリのさわやかな味わいと、はちみつやヨーグルトのみほんのりとした甘さが絶妙なバランスでとても飲みやすかったです！牛乳には骨を強くする効果もあり、外出自粛が続き紫外線に当たらず弱くなった骨をたくましくしてくれることでしょう！たった15分ほどで簡単に出来るスムージーで少量でもロスを減らすことができてよかったです。",
                like: "https://www.instagram.com/p/CBDryyBpDC8/",
                image: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/102407016_592265181666910_1587341704254612989_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=tjcegt90DEAAX8DOVyV&oh=5db6954d45422d5a16ca247a6d554bc6&oe=5F036C77",
        },
        {
                title: "ハーブラン",
                body: "高校3年<br><br>材料<br>有明ハーバー ダブルマロン味 さつまいも バニラアイス<br><br>地元神奈川県の大人気のお土産ありあけハーバーがCOVID- 19の緊急事態宣言により観光客が減少したことで売れ残りが増えてしまっています。そこでハーバーを土台としたモンブランを作りました！ハーバーを潰して円盤の形にし、その上にハーバーの山の形をした部分をのせ、周りをさつまいもクリームで円を描くように囲みました。もちろんそのまま食べても美味しいハーバーですが、ちょっとしたアレンジを加えるだけでまた新たな味わいになりました！ダブルマロン味は中にまるごと栗が入っているためモンブランとの相性は抜群です！！地元の顔であるハーバーアレンジレシピに火がつき、元の生活が戻った際に観光が賑わうことを願っています。",
                like: "https://www.instagram.com/p/CBDrzZupax1/",
                image: "https://instagram.fkix2-1.fna.fbcdn.net/v/t51.2885-15/e35/101949650_929603987482528_205392990134946771_n.jpg?_nc_ht=instagram.fkix2-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=-VF4l27Ay_IAX8RVHOj&oh=1dc0ec36aaaa5eeb9e029bf36eb97c32&oe=5F05A50B",
        },
        {
                title: "にんじんたっぷりポタージュ",
                body: "高校3年<br><br>材料<br>牛乳300cc 水200cc にんじん1本 たまねぎ2分の1 コンソメ5g 塩こしょう少々<br><br>食品ロスを減らすため、給食を食べる機会がなくなったことでたくさん余っている牛乳を使った料理をしました。ポタージュは牛乳を300ccも使うためたくさん消費することができました。にんじんとたまねぎをみじん切りにすることが大変でしたが時間をかけて飲んだ時に違和感がなくなるまで細かく刻みました。牛乳が苦手な方でもポタージュなら牛乳の匂いや味がかき消されるため飲みやすいと思います。我が家でも大好評でした。骨を丈夫にする牛乳だけでなく、にんじんや玉ねぎには生活習慣病の予防にも繋がるため、外出自粛が続き食事や飲酒などを摂り過ぎてしまった人にもオススメです。",
                like: "https://www.instagram.com/p/CBDrzxQJH2B/",
                image: "https://instagram.fkix2-2.fna.fbcdn.net/v/t51.2885-15/e35/101706369_784491672082262_9075873695835287818_n.jpg?_nc_ht=instagram.fkix2-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ke9uOdBwJ3EAX_TvB4s&oh=e89c651b45f7c5035d9c6bafde32944b&oe=5F02914F",
        },
        {
                title: "牛乳だけで、「蘇」をつくってみた！",
                body: "高校3年<br>今回は牛乳だけを使って料理をしました。料理名は「蘇」です。蘇は昔のチーズのような物で、牛乳を煮詰めるだけでできてしまいます！！超簡単！！実際に作ってみると、火が強すぎたらしく、焦げちゃいました（笑）。でも作るのに牛乳を思ったより使用できたのでよかったです!!!!",
                like: "https://www.instagram.com/p/CBDuHE5pgNp/",
                image: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/101702365_251965036242262_4001800245887912105_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=Chdb79C0mfkAX8znX_2&oh=78daf021a4190a97b473050a5ff67d6d&oe=5F05D961",
        },
        {
                title: "QOL朝ごはん",
                body: "具材:牛乳<br><br>全国の小学校が休校になり、牛乳の消費量が減ってしまっているという情報を耳にしました。コーヒーや紅茶などで牛乳は使うけど、簡単に作れる食べ物でも使えないか？と考え、フレンチトーストを思いつきました。パン1枚につき、100mlの牛乳が使えます。卵と牛乳と砂糖を混ぜて食パンを浸して焼くだけなのでとても簡単でした。そして飲む以外の方法で牛乳が使用できてよかったです。せっかく時間がある休校中なので、何度か朝ごはんとしてつくっています。6人家族なので、6枚作ると600mlの牛乳を使うので、少しは牛乳農家さんに貢献できたかなと思います。",
                like: "https://www.instagram.com/p/CBDuH2FJi_y/",
                image: "https://instagram.fkix2-2.fna.fbcdn.net/v/t51.2885-15/e35/101661567_310610773268665_2809596562571149741_n.jpg?_nc_ht=instagram.fkix2-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=cwo6pFXXCwcAX_Tfnk1&oh=3aeb77fd2a38a2f863e990a2af7d7943&oe=5F037738",
        },
        {
                title: "スフレオムレツに挑戦",
                body: "卵を使った料理です。簡単にできて、かつ見た目もいいので料理を始めるきっかけになると思います。それが食品ロスの軽減につながればいいなと思いました。",
                like: "https://www.instagram.com/p/CBDuIW9J8sz/",
                image: "https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/e35/101945710_249813989585290_5309126939754892213_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=110&_nc_ohc=PsX-0CUrHkEAX8Fjm6T&oh=ebb162039add1aba79e3d0e111aa096c&oe=5F02BA24",
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
        document.querySelector("#gohan > div > div").querySelectorAll(".card").forEach((card, index) => {
                card.style.display = cardDataList.length <= offset + index ? "none" : "block"; // データリストの最後より後になる要素はとりあえず非表示に
                if (cardDataList.length <= offset + index) return; // データリストの最後より後は中身がないのでスキップ
                const cardData = cardDataList[offset + index];

                const cardImageElement = card.querySelector("div > div.col-md-4 > img");
                cardImageElement.src = cardData.image;

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