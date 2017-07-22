<?php

use Illuminate\Database\Seeder;

use App\Album;
use App\Song;
class SongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
      $album = Album::where("title","醜奴兒")->first(); 
      // dd($album );
      $album_id=$album->id;


      $songs = [
        [
          "title" => "INTRO",
          "cover" => "/img/03_WORKS/歌名/INTRO.png",
          "lyrics" => "我試過握著她的手 卻還是一樣寂寞
          從沒想過 原來自己那麼醜陋
          原來自己那麼醜陋

          我說得像切身之痛 卻一直在退縮
          從沒想過 原來自己那麼醜陋
          原來自己那麼醜陋",
          "preview" => "/audio/preview/mp3/醜奴兒/01 Intro.mp3"
        ],
        [
          "title" => "醜",
          "cover" => "/img/03_WORKS/歌名/醜.png",
          "lyrics" => "我試過握著她的手 卻還是一樣寂寞
          從沒想過 原來自己那麼醜陋
          原來自己那麼醜陋

          我說得像切身之痛 卻一直在退縮
          從沒想過 原來自己那麼醜陋
          原來自己那麼醜陋",
          "preview" => "/audio/preview/mp3/醜奴兒/02 醜.mp3"
        ],
        [
          "title" => "爛泥",
          "cover" => "/img/03_WORKS/歌名/爛泥.png",
          "lyrics" => "噢多麼美麗的一顆心
          怎麼會 怎麼會 就變成了一灘爛泥
          噢多麼單純的一首詩
          怎麼會 怎麼會 都變成了諷刺

          我想要說的 前人們都說過了
          我想要做的 有錢人都做過了
          我想要的公平都是不公們虛構的

          噢多麼乾淨的一幅畫
          怎麼會 怎麼會 充滿了悲傷
          噢多麼天真的一句話
          怎麼會 怎麼會 像噩夢一樣",
          "preview" => "/audio/preview/mp3/醜奴兒/03 爛泥.mp3"
        ],
        [
          "title" => "勇敢的人",
          "cover" => "/img/03_WORKS/歌名/勇敢的人.png",
          "lyrics" => "又忍著失望的不解的痛恨的 又只用空瓶把今天砸碎
          然後又哭著對離開了自己的影子道歉
          別氣了沒有誰在跟你作對 別哭了沒有誰會心碎
          沒有勇敢的人
          勇敢的人

          賣光了一切 你的肝和你的肺
          他們扔了你的世界 去成為更好的人類
          那廉價的眼淚就別掛在嘴邊
          什麼也沒改變 什麼也不改變

          請別舉起手槍 這裡沒有反抗的人
          不用再圍牆 這裡沒有反抗的人
          反抗的人

          所謂的過生活 一輩子他都在躲
          一直在躲一直在躲 沒有出口沒有出口",
          "preview" => "/audio/preview/mp3/醜奴兒/04 勇敢的人.mp3"
        ],
        [
          "title" => "大風吹",
          "cover" => "/img/03_WORKS/歌名/大風吹.png",
          "lyrics" => "大風吹著誰 誰就倒楣
          每個人都想當鬼 都一樣的下賤

          哭啊 喊啊 叫你媽媽帶你去買玩具啊
          快 快拿到學校炫耀吧 孩子 交點朋友吧
          哎呀呀 你看你手上拿的是什麼啊
          那東西我們早就不屑啦 哈哈哈 哈

          一樣又醉了 一樣又掉眼淚
          一樣的屈辱 一樣的感覺
          怪罪給時間 它給了起點
          怪罪給時間 它給了終點",
          "preview" => "/audio/preview/mp3/醜奴兒/05 大風吹.mp3"
        ],
        [
          "title" => "艾瑪",
          "cover" => "/img/03_WORKS/歌名/艾瑪.png",
          "lyrics" => "歌唱著一種沒有深度的語言
          試著跟著這些虛偽一起改變
          改變

          Hypocrisy…
          妳笑著說我所擁有的一切 也都是虛偽
          妳笑著說我所有的謊言 活不過明天

          交換著一種不負責任的畫面
          試著跟著這些標籤一起改變 改變",
          "preview" => "/audio/preview/mp3/醜奴兒/06 艾瑪.mp3"
        ],
        [
          "title" => "等",
          "cover" => "/img/03_WORKS/歌名/等.png",
          "lyrics" => "我在等的那部車呢 它會不會又拋錨了
          我在等的那個人呢 祂會不會又不來了
          
          I'll wait, I'll wait, I'll keep on waiting.
          I'll wait, I'll wait, I'll wait for nothing.

          你在等的那部車呢 它會不會也拋錨了
          你在等的那個人呢 祂會不會也不來了
          ",
          "preview" => "/audio/preview/mp3/醜奴兒/07 等.mp3"
        ],
        [
          "title" => "⻤",
          "cover" => "/img/03_WORKS/歌名/⻤.png",
          "lyrics" => "從沒想過要傷害誰 對一切也都感到抱歉
          可是我的自卑勝過了一切愛我的
          於是我把愛人們都殺死了
          可是你的傷悲勝過了一切愛你的
          於是你把我給殺死了

          為了什麼而流著血 是為了誰而流眼淚
          我躲在夜裡取笑著黑 因為沒有人能殺死鬼

          是為了什麼而流著血 是為了誰而流眼淚
          我躲在夜裡取笑著黑 因為沒有人能殺死鬼",
          "preview" => "/audio/preview/mp3/醜奴兒/08 鬼.mp3"
        ],
        [
          "title" => "在",
          "cover" => "/img/03_WORKS/歌名/在.png",
          "lyrics" => "一樣的天空 卻還是只有錯過
          一樣的歌 還是唱著他多愛她
          一樣快死心 一樣爛的劇情
          卻還是期待著 她嘴裡那句我愛你

          她說 去你媽的花海
          我說 妳這麼說好帥
          她說 要把它們都打敗
          我說 我會一直都在
          我會一直都

          在路燈下 遇見了很像妳的她
          我沒有說話 就算說了也是謊
          沒差 我想都一樣吧
          至少 她嘴裡那句我愛你

          她說 去你媽的花海
          我說 妳這麼說好帥
          她說 要把它們都打敗
          我說 我會一直都在
          我會一直都",
          "preview" => "/audio/preview/mp3/醜奴兒/09 在.mp3"
        ],
        [
          "title" => "山海",
          "cover" => "/img/03_WORKS/歌名/山海.png",
          "lyrics" => "我看著 天真的我自己
          出現在 沒有我的故事裡
          等待著 我的回應
          一個為何至此 的原因

          他明白 他明白 我給不起
          於是轉身向山裡走去
          他明白 他明白 我給不起
          於是轉身向大海走去

          我聽見那少年的聲音 在還有未來的過去
          渴望著 美好結局
          卻沒能成為自己

          他明白 他明白 我給不起
          於是轉身向山裡走去
          他明白 他明白 我給不起
          於是轉身向大海走去",
          "preview" => "/audio/preview/mp3/醜奴兒/10 山海.mp3"
        ],
        [
          "title" => "我們",
          "cover" => "/img/03_WORKS/歌名/我們.png",
          "lyrics" => "我們在原野上找一面牆
          我們在標籤裡找方向
          我們在廢墟般的垃圾裡找一塊紅磚
          我們在工整的巷子裡找家 找家 找

          我們義無反顧的試著後悔
          我們聲嘶力竭的假裝吶喊
          我們萬分惋惜的浪費著
          用盡一切換來的紙張
          用盡一切換來的紙張
          用盡一切",
          "preview" => "/audio/preview/mp3/醜奴兒/11 我們.mp3"
        ],
        [
          "title" => "情歌",
          "cover" => "/img/03_WORKS/歌名/情歌.png",
          "lyrics" => "別再說讓它去吧 別再說讓它去吧
          別再說讓它去吧 別再說讓它去吧

          殺了它 順便殺了我 拜託你了
          殺了它 順便殺了我 拜託你了

          你說是夢所以才痛 睡醒了再說
          但那挫折和恐懼依舊 但那挫折和恐懼依舊
          我把故鄉給賣了 愛人給騙了
          但那挫折和恐懼依舊 但那挫折和恐懼依舊

          殺了它 順便殺了我 拜託你了
          殺了它 順便殺了我 拜託你了",
          "preview" => "/audio/preview/mp3/醜奴兒/12 情歌.mp3"
        ]
      ];

      foreach ($songs as $key => $value) {
        $value["album_id"]=$album_id;
        $value["price"]=30;
        $value["updated_at"]=date("Y-m-d H:i:s");
        $value["created_at"]=date("Y-m-d H:i:s");

        $song = Song::create($value);
      }
      

    }
}
