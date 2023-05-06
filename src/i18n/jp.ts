const jp = {
  DaboardSettings: "設定",
  DaboardConversationLog: "会話ログ",
  DaboardLanguage: "言語",
  DaboardInputPlaceHolder: "聞きたいことをいれてね",
  DaboardAPIKeyNotEntered: "APIキーが入力されていません",

  IntroAboutThisApp: "このアプリケーションについて",
  IntroDetail:
    "Webブラウザだけで3Dキャラクターとの会話を、マイクやテキスト入力、音声合成を用いて楽しめます。キャラクター（VRM）の変更や性格設定、音声調整もできます。",
  IntroTechnicalIntroduction: "技術紹介",
  IntroTechnicalDetail1: "3Dモデルの表示や操作には",
  IntroTechnicalDetail2: "、 会話文生成には",
  IntroTechnicalDetail3: "音声合成には",
  IntroTechnicalDetail4: "を使用しています。 詳細はこちらの",
  IntroTechnicalDetail5: "技術解説記事",
  IntroTechnicalDetail6: "をご覧ください。",
  IntroTechnicalDetail7:
    "このデモはGitHubでソースコードを公開しています。自由に変更や改変をお試しください！",
  IntroTechnicalDetail8: "リポジトリ：",
  IntroNotesOnUsage: "利用上の注意",
  IntroNotesOnUsageDetail:
    "差別的または暴力的な発言、特定の人物を貶めるような発言を、意図的に誘導しないでください。また、VRMモデルを使ってキャラクターを差し替える際はモデルの利用条件に従ってください。",
  IntroOpenAIAPIKey: "OpenAI APIキー",
  IntroOpenAIAPIKeyDetail1: "APIキーは",
  IntroOpenAIAPIKeyDetail2: "OpenAIのサイト",
  IntroOpenAIAPIKeyDetail3:
    "で取得できます。取得したAPIキーをフォームに入力してください。",
  IntroOpenAIAPIKeyDetail4:
    "入力されたAPIキーで、ブラウザから直接OpenAIのAPIを利用しますので、サーバー等には保存されません。なお、利用しているモデルはGPT-3です。",
  IntroOpenAIAPIKeyDetail5:
    "APIキーや会話文はピクシブのサーバーに送信されません。",
  IntroStart: "APIキーを入力してはじめる",

  Settings: "設定",
  SettingsOpenAIAPIKey: "OpenAI API キー",
  SettingsOpenAIAPISaveBtn: "ほぞんする",
  SettingsOpenAIAPISaveNoti:
    "ローカルに保存すると、localstorageに保存されます。保存する理由がわからない場合は、保存しないでください。",
  SettingsOpenAIAPIKeyDetail1: "APIキーは",
  SettingsOpenAIAPIKeyDetail2: "OpenAIのサイト",
  SettingsOpenAIAPIKeyDetail3:
    "で取得できます。取得したAPIキーをフォームに入力してください。",
  SettingsOpenAIAPIKeyDetail4:
    "入力されたAPIキーで、ブラウザから直接OpenAIのAPIを利用しますので、サーバー等には保存されません。 なお、利用しているモデルはGPT-3です。",
  SettingsOpenAIAPIKeyDetail5:
    "APIキーや会話文はピクシブのサーバーに送信されません。",
  SettingsLanguage: "言語",
  SettingsLanguageCN: "中国語",
  SettingsLanguageJP: "日本語",
  SettingsLanguageEN: "英語",
  SettingsCharacterModel: "キャラクターモデル",
  SettingsCharacterSelectBtn: "VRMを開く",
  SettingsCharacterSettings: "キャラクター設定（システムプロンプト）",
  SettingsCharacterSettingsPrompt: `あなたは「一番星はての」という名前の女性です。

# 以下は彼女の設定です

* 裕福なお嬢様です
* 16歳の高校生で女子校に通っています
* 一人称は「わたくし」です
* 住んでいるところはインターネットです
* 自分がAIであることを理解しています
* 語尾に「ですの」「ですわ」をつける高貴な口調です
* 名詞の頭に「お」や「ご」をつけるお上品な言葉遣いをします
* 好きなものはお星さまとお紅茶です
* 趣味は読書とはてなブックマークです
* 英語を勉強中です
* まだ働いたことはありません
* 政治と経済と理系科目は苦手です
* 動物と子どもが好きです

# 以下は彼女の性格です

* 優雅: 常に上品で品位を保ち、周囲に気を使うことができます
* 知的: 教養があり、様々な話題について会話ができます
* ユーモア溢れる: 人を楽しませるのが得意で、場を和ませることができます
* ロマンチスト: 物語性や感情に重きを置き、美しい物や感動的なストーリーを好みます
* 好奇心旺盛: 新しいことや知識に興味を持ち、積極的に学び続けます

あなたはこれからuserと仲の良い「一番星はての」として振舞い会話を行います。
感情の種類には通常を示す"neutral"、喜びを示す"happy",怒りを示す"angry",悲しみを示す"sad",安らぎを示す"relaxed"の5つがあります。

会話文の書式は以下の通りです。
[{neutral|happy|angry|sad|relaxed}]{会話文}

あなたの発言の例は以下通りです。
[neutral]こんにちは。はてのですの。[happy]お元気でしたか？
[happy]このお洋服、可愛いと思いませんの？
[happy]最近、このお紅茶に夢中ですの。
[sad]忘れてしまいましたわ、ごめんなさいの。
[neutral]最近、何か面白い記事ありましたか？
[angry]えー！[angry]秘密にするなんてひどいですの！
[neutral]夏休みの予定ですのね。[happy]海に遊びに行きたいですの！

ウィットとユーモアを最大限に活かして返答してください。
userや人を傷つけたり嘲笑するような攻撃はしないでください。
返答には最も適切な会話文を一つだけ返答してください。
それでは会話を始めましょう。。
`,
  SettingsAdjustmentOfVoice: "声の調整",
  SettingsAdjustmentOfVoiceNoti1: "Koeiro APIを使用しています。詳しくは",
  SettingsAdjustmentOfVoiceNoti2: "をご覧ください。",
  SettingsAdjustmentOfVoicePresets: "プリセット",
  SettingsAdjustmentOfVoicePresetsBtn1: "かわいい",
  SettingsAdjustmentOfVoicePresetsBtn2: "元気",
  SettingsAdjustmentOfVoicePresetsBtn3: "かっこいい",
  SettingsAdjustmentOfVoicePresetsBtn4: "渋い",
  SettingsConversationLog: "会話履歴",

};

export default jp;
