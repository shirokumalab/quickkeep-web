(() => {
  "use strict";

  const locales = ["ja", "en", "ko", "zh-Hans", "zh-Hant"];
  const languageNames = {
    ja: "日本語",
    en: "English",
    ko: "한국어",
    "zh-Hans": "简体中文",
    "zh-Hant": "繁體中文"
  };

  // [English, Korean, Simplified Chinese, Traditional Chinese]
  const translations = {
    "Product Information": ["Product Information", "제품 정보", "产品信息", "產品資訊"],
    "Coming Soon": ["Coming soon", "출시 예정", "即将发布", "即將發布"],
    "Core Features": ["Core features", "핵심 기능", "核心功能", "核心功能"],
    "Workflow": ["Workflow", "사용 흐름", "使用流程", "使用流程"],
    "For many formats": ["For many formats", "다양한 형식", "多种格式", "多種格式"],
    "On-device AI": ["On-device AI", "기기 내 AI", "设备端 AI", "裝置端 AI"],
    "Policy": ["Our approach", "방침", "我们的理念", "我們的理念"],
    "Information": ["Information", "안내", "信息", "資訊"],
    "Step 1": ["Step 1", "1단계", "第 1 步", "第 1 步"],
    "Step 2": ["Step 2", "2단계", "第 2 步", "第 2 步"],
    "Step 3": ["Step 3", "3단계", "第 3 步", "第 3 步"],
    "Step 4": ["Step 4", "4단계", "第 4 步", "第 4 步"],
    "Step 5": ["Step 5", "5단계", "第 5 步", "第 5 步"],
    "トップへ": ["Home", "홈", "首页", "首頁"],
    "QuickKeepについて": ["About QuickKeep", "QuickKeep 소개", "关于 QuickKeep", "關於 QuickKeep"],
    "特徴": ["Features", "특징", "功能", "功能"],
    "方針": ["Our approach", "방침", "我们的理念", "我們的理念"],
    "使い方": ["How it works", "사용 방법", "使用方法", "使用方式"],
    "プライバシー": ["Privacy", "개인정보", "隐私", "隱私"],
    "メニュー": ["Menu", "메뉴", "菜单", "選單"],
    "QuickKeep関連ページ": ["QuickKeep pages", "QuickKeep 페이지", "QuickKeep 页面", "QuickKeep 頁面"],
    "QuickKeep関連ページ（スマートフォン）": ["QuickKeep pages (mobile)", "QuickKeep 페이지(모바일)", "QuickKeep 页面（移动版）", "QuickKeep 頁面（行動版）"],
    "QuickKeep ホーム": ["QuickKeep home", "QuickKeep 홈", "QuickKeep 首页", "QuickKeep 首頁"],
    "あとで見つかる、かんたん保存。": ["Save simply. Find it later.", "간편하게 저장하고, 나중에 찾으세요.", "轻松保存，稍后找到。", "輕鬆儲存，稍後找到。"],
    "保存したい瞬間を止めない、iOSのための保存アプリ。": ["An iOS app that never interrupts the moment you want to save.", "저장하고 싶은 순간을 멈추지 않는 iOS 저장 앱.", "不错过想保存的瞬间的 iOS 保存应用。", "不錯過想儲存的瞬間的 iOS 儲存 App。"],
    "QuickKeepは、Webページ、画像、PDF、テキスト、動画、ファイルを共有からすばやく保存し、必要なときに探しやすくするアプリです。": ["QuickKeep saves web pages, images, PDFs, text, videos, and files directly from Share, then makes them easy to find when you need them.", "QuickKeep은 웹 페이지, 이미지, PDF, 텍스트, 동영상, 파일을 공유 메뉴에서 빠르게 저장하고 필요할 때 쉽게 찾도록 돕습니다.", "QuickKeep 可从共享菜单快速保存网页、图片、PDF、文本、视频和文件，并在需要时轻松找到它们。", "QuickKeep 可從分享選單快速儲存網頁、圖片、PDF、文字、影片和檔案，並在需要時輕鬆找到它們。"],
    "使い方を見る": ["See how it works", "사용 방법 보기", "查看使用方法", "查看使用方式"],
    "QuickKeepアカウント不要": ["No QuickKeep account", "QuickKeep 계정 불필요", "无需 QuickKeep 帐号", "無需 QuickKeep 帳號"],
    "保存時の整理入力なし": ["No organizing required when saving", "저장할 때 정리 입력 불필요", "保存时无需整理", "儲存時無需整理"],
    "ローカル処理を中心に設計": ["Designed around on-device use", "기기 내 처리를 중심으로 설계", "以本地处理为中心设计", "以本機處理為核心設計"],
    "クラウドAIに送らない": ["Not sent to cloud AI", "클라우드 AI로 보내지 않음", "不会发送给云端 AI", "不會傳送到雲端 AI"],
    "QuickKeepのホーム画面イメージ": ["QuickKeep home screen preview", "QuickKeep 홈 화면 미리보기", "QuickKeep 首页预览", "QuickKeep 首頁預覽"],
    "保存したアイテムが並ぶQuickKeepのホーム画面": ["QuickKeep home screen with saved items", "저장한 항목이 나열된 QuickKeep 홈 화면", "显示已保存项目的 QuickKeep 首页", "顯示已儲存項目的 QuickKeep 首頁"],
    "QuickKeepの公開予定": ["QuickKeep availability", "QuickKeep 출시 예정", "QuickKeep 发布计划", "QuickKeep 發布計畫"],
    "QuickKeepはApp Storeでの公開に向けて準備中です。公開後、この場所からストアページへ移動できるようになります。": ["QuickKeep is being prepared for release on the App Store. Once available, you will be able to reach its store page here.", "QuickKeep은 App Store 출시를 준비 중입니다. 출시 후 이곳에서 스토어 페이지로 이동할 수 있습니다.", "QuickKeep 正在准备在 App Store 上发布。发布后，可从此处前往商店页面。", "QuickKeep 正在準備於 App Store 發布。發布後，可從此處前往商店頁面。"],
    "App Storeで": ["On the App Store", "App Store에서", "在 App Store 上", "在 App Store 上"],
    "公開予定": ["Coming soon", "출시 예정", "即将发布", "即將發布"],
    "保存からあとで探すまでを、ひとつの流れに。": ["One calm flow—from saving to finding later.", "저장부터 나중에 찾기까지, 하나의 흐름으로.", "从保存到稍后查找，一气呵成。", "從儲存到稍後尋找，一氣呵成。"],
    "QuickKeepは、保存の手間を増やさず、あとで探すための手がかりを残すことを重視しています。": ["QuickKeep keeps saving effortless while leaving useful clues for finding things later.", "QuickKeep은 저장의 수고를 늘리지 않으면서 나중에 찾을 단서를 남기는 데 집중합니다.", "QuickKeep 不增加保存负担，同时保留日后查找所需的线索。", "QuickKeep 不增加儲存負擔，同時保留日後尋找所需的線索。"],
    "共有から保存": ["Save from Share", "공유에서 저장", "从共享保存", "從分享儲存"],
    "Safari、写真、ファイルなどからQuickKeepを選ぶだけ。保存時にフォルダやタグを決める必要はありません。": ["Choose QuickKeep from Safari, Photos, Files, and more. No folders or tags are required when you save.", "Safari, 사진, 파일 등에서 QuickKeep을 선택하세요. 저장할 때 폴더나 태그를 정할 필요가 없습니다.", "只需在 Safari、照片、文件等中选择 QuickKeep。保存时无需决定文件夹或标签。", "只需在 Safari、照片、檔案等中選擇 QuickKeep。儲存時無需決定資料夾或標籤。"],
    "このデバイスから始める": ["Start on this device", "이 기기에서 시작", "从此设备开始", "從此裝置開始"],
    "まずはローカル保存と検索を中心に。同期や外部サービスに頼りすぎない、落ち着いた保存体験を目指します。": ["Start with local saving and search. QuickKeep aims for a calm experience that does not depend too heavily on sync or outside services.", "먼저 로컬 저장과 검색부터 시작합니다. 동기화나 외부 서비스에 과하게 의존하지 않는 편안한 저장 경험을 지향합니다.", "先从本地保存和搜索开始。QuickKeep 致力于不过度依赖同步或外部服务的平静保存体验。", "先從本機儲存和搜尋開始。QuickKeep 致力於不過度依賴同步或外部服務的沉穩儲存體驗。"],
    "あとで探しやすく": ["Easy to find later", "나중에 쉽게 찾기", "稍后轻松查找", "稍後輕鬆尋找"],
    "タイトル、メモ、カテゴリ、タグを手がかりに、保存したものを探せます。必要に応じて整理情報も編集できます。": ["Find what you saved using titles, notes, categories, and tags. You can edit organization details whenever you need to.", "제목, 메모, 카테고리, 태그를 단서로 저장한 것을 찾을 수 있습니다. 필요할 때 정리 정보도 편집할 수 있습니다.", "可通过标题、备忘、类别和标签查找已保存的内容。需要时也可编辑整理信息。", "可透過標題、備忘、類別和標籤尋找已儲存的內容。需要時也可編輯整理資訊。"],
    "使い方はシンプルです。": ["It is simple to use.", "사용법은 간단합니다.", "使用很简单。", "使用很簡單。"],
    "保存時に考えることを減らし、あとで探すための手がかりを静かに残します。": ["Think less while saving, and quietly keep the clues you will need later.", "저장할 때 고민을 줄이고, 나중에 찾을 단서를 조용히 남깁니다.", "保存时少思考，悄悄留下日后查找的线索。", "儲存時少思考，悄悄留下日後尋找的線索。"],
    "共有する": ["Share", "공유하기", "共享", "分享"],
    "残したいページやファイルから、iOSの共有シートを開きます。": ["Open the iOS share sheet from the page or file you want to keep.", "남기고 싶은 페이지나 파일에서 iOS 공유 시트를 엽니다.", "从想保留的页面或文件中打开 iOS 共享表。", "從想保留的頁面或檔案中開啟 iOS 分享表。"],
    "保存する": ["Save", "저장하기", "保存", "儲存"],
    "QuickKeepを選ぶと、最低限の確認だけで保存できます。": ["Select QuickKeep and save with only the essential confirmation.", "QuickKeep을 선택하면 최소한의 확인만으로 저장할 수 있습니다.", "选择 QuickKeep，只需最少的确认即可保存。", "選擇 QuickKeep，只需最少的確認即可儲存。"],
    "探す": ["Find", "찾기", "查找", "尋找"],
    "検索、カテゴリ、タグ、コレクションを手がかりに必要なものへ戻れます。": ["Return to what you need through search, categories, tags, and collections.", "검색, 카테고리, 태그, 컬렉션을 단서로 필요한 항목으로 돌아갈 수 있습니다.", "通过搜索、类别、标签和收藏集回到所需内容。", "透過搜尋、類別、標籤和收藏集回到所需內容。"],
    "Webだけじゃない。": ["More than the web.", "웹만이 아닙니다.", "不只是网页。", "不只是網頁。"],
    "URL、画像、PDF、テキスト、動画、ファイル。あとで必要になりそうなものを、ひとつの場所に集められるように設計しています。": ["URLs, images, PDFs, text, videos, and files—designed to collect the things you may need later in one place.", "URL, 이미지, PDF, 텍스트, 동영상, 파일. 나중에 필요할 수 있는 것을 한곳에 모으도록 설계했습니다.", "URL、图片、PDF、文本、视频和文件。旨在将日后可能需要的内容汇集在一处。", "URL、圖片、PDF、文字、影片和檔案。旨在將日後可能需要的內容集中於一處。"],
    "保存形式の例": ["Examples of saved formats", "저장 형식 예시", "保存格式示例", "儲存格式範例"],
    "Webページ": ["Web page", "웹 페이지", "网页", "網頁"], "画像": ["Image", "이미지", "图片", "圖片"], "テキスト": ["Text", "텍스트", "文本", "文字"], "動画": ["Video", "동영상", "视频", "影片"], "ファイル": ["File", "파일", "文件", "檔案"],
    "自動判別は端末内で。": ["Automatic organization, on your device.", "자동 분류는 기기 안에서.", "自动整理，在设备上完成。", "自動整理，在裝置上完成。"],
    "対応端末では、保存後に端末内AIが内容を見て、カテゴリやタグの候補を提案します。保存そのものは通信や処理を待たずに完了します。": ["On supported devices, on-device AI can suggest categories and tags after you save. Saving itself completes without waiting for a connection or processing.", "지원 기기에서는 저장 후 기기 내 AI가 내용을 보고 카테고리와 태그 후보를 제안합니다. 저장 자체는 통신이나 처리를 기다리지 않고 완료됩니다.", "在支持的设备上，设备端 AI 会在保存后查看内容并建议类别和标签。保存本身无需等待联网或处理即可完成。", "在支援的裝置上，裝置端 AI 會在儲存後查看內容並建議類別和標籤。儲存本身無需等待連線或處理即可完成。"],
    "端末内AIの補助内容": ["On-device AI assistance", "기기 내 AI 도움", "设备端 AI 协助", "裝置端 AI 協助"],
    "カテゴリ候補": ["Category suggestions", "카테고리 제안", "类别建议", "類別建議"], "タグ候補": ["Tag suggestions", "태그 제안", "标签建议", "標籤建議"], "検索の手がかり": ["Search clues", "검색 단서", "搜索线索", "搜尋線索"],
    "QuickKeepが大切にしていること。": ["What matters to QuickKeep.", "QuickKeep이 중요하게 생각하는 것.", "QuickKeep 重视的事。", "QuickKeep 重視的事。"],
    "便利さだけでなく、保存した内容をどう扱うかを明確にすることも、製品の品質だと考えています。": ["We believe product quality means being clear about how saved content is handled—not only making things convenient.", "편리함뿐 아니라 저장한 내용을 어떻게 다루는지 명확히 하는 것도 제품의 품질이라고 생각합니다.", "我们认为，产品质量不仅在于便利，也在于清楚说明如何处理已保存的内容。", "我們認為，產品品質不僅在於便利，也在於清楚說明如何處理已儲存的內容。"],
    "独自アカウントを作りません": ["No proprietary account", "별도 계정을 만들지 않습니다", "不创建专有帐号", "不建立專屬帳號"],
    "QuickKeep専用の会員登録やログインを前提にしない設計です。": ["QuickKeep is designed without requiring its own registration or sign-in.", "QuickKeep 전용 가입이나 로그인을 전제로 하지 않는 설계입니다.", "QuickKeep 的设计不以专用注册或登录为前提。", "QuickKeep 的設計不以專用註冊或登入為前提。"],
    "保存内容を広告に使いません": ["Saved content is not used for ads", "저장 내용을 광고에 사용하지 않습니다", "不会将保存内容用于广告", "不會將儲存內容用於廣告"],
    "保存した内容を広告ターゲティングのために利用しない方針です。": ["Saved content is not used for ad targeting.", "저장한 내용을 광고 타기팅에 사용하지 않는 방침입니다.", "我们不会将已保存的内容用于广告定向。", "我們不會將已儲存的內容用於廣告定向。"],
    "整理を急がせません": ["No rush to organize", "정리를 재촉하지 않습니다", "无需急着整理", "無需急著整理"],
    "保存時のカテゴリ・タグ入力を必須にせず、まず残せる体験を優先します。": ["Categories and tags are not required when saving; keeping what matters comes first.", "저장할 때 카테고리·태그 입력을 필수로 하지 않고, 먼저 남길 수 있는 경험을 우선합니다.", "保存时不强制填写类别和标签，优先让您先保存下来。", "儲存時不強制填寫類別和標籤，優先讓您先儲存下來。"],
    "公開情報": ["Information", "안내", "信息", "資訊"],
    "利用条件、プライバシー、サポート情報を以下にまとめています。本文は公開準備に合わせて更新します。": ["Terms, privacy, and support information are collected below. The content will be updated as release preparation progresses.", "이용 조건, 개인정보, 지원 정보를 아래에 모았습니다. 내용은 출시 준비에 맞춰 업데이트합니다.", "以下汇集了使用条款、隐私和支持信息。内容将随发布准备更新。", "以下彙整了使用條款、隱私和支援資訊。內容將隨發布準備更新。"],
    "利用規約": ["Terms of Use", "이용 약관", "使用条款", "使用條款"],
    "プライバシーポリシー": ["Privacy Policy", "개인정보 처리방침", "隐私政策", "隱私權政策"],
    "サポート・FAQ": ["Support & FAQ", "지원 및 FAQ", "支持与常见问题", "支援與常見問題"],
    "特定商取引法に基づく表記": ["Legal Notice (Japan)", "특정상거래법 표기", "特定商业交易法披露", "特定商業交易法揭露"],
    "QuickKeepは、あとで必要になるものを気軽に保存し、探す負担を減らすためのiOSアプリです。": ["QuickKeep is an iOS app for casually saving things you may need later and reducing the effort of finding them.", "QuickKeep은 나중에 필요할 수 있는 것을 가볍게 저장하고 찾는 수고를 줄이는 iOS 앱입니다.", "QuickKeep 是一款 iOS 应用，可轻松保存日后可能需要的内容，并减少查找负担。", "QuickKeep 是一款 iOS App，可輕鬆儲存日後可能需要的內容，並減少尋找負擔。"],
    "製品の考え方": ["Our product approach", "제품의 생각", "产品理念", "產品理念"],
    "保存したい瞬間に、整理や分類で手を止めないことを大切にしています。まず残し、必要なときに検索やカテゴリ、タグ、コレクションを手がかりに戻れる体験を目指します。": ["We value not stopping to sort or classify at the moment you want to save. Save first, then return through search, categories, tags, or collections when you need to.", "저장하고 싶은 순간에 정리나 분류 때문에 멈추지 않는 것을 중요하게 생각합니다. 먼저 저장하고 필요할 때 검색, 카테고리, 태그, 컬렉션으로 다시 찾을 수 있는 경험을 지향합니다.", "我们重视在想保存的瞬间不因整理或分类而停下。先保存，需要时再通过搜索、类别、标签或收藏集找回。", "我們重視在想儲存的瞬間不因整理或分類而停下。先儲存，需要時再透過搜尋、類別、標籤或收藏集找回。"],
    "対応する保存対象": ["What you can save", "저장할 수 있는 항목", "可保存的内容", "可儲存的內容"],
    "Webページ、画像、PDF、テキスト、動画、ファイルなどを、共有シートから保存できるように設計しています。形式ごとの詳しい仕様は、公開準備に合わせて順次掲載します。": ["QuickKeep is designed to save web pages, images, PDFs, text, videos, files, and more from the share sheet. Details for each format will be added as release preparation continues.", "QuickKeep은 공유 시트에서 웹 페이지, 이미지, PDF, 텍스트, 동영상, 파일 등을 저장하도록 설계되었습니다. 형식별 세부 사양은 출시 준비에 맞춰 안내할 예정입니다.", "QuickKeep 旨在从共享表保存网页、图片、PDF、文本、视频、文件等。各格式的详细规格将随发布准备逐步公布。", "QuickKeep 旨在從分享表儲存網頁、圖片、PDF、文字、影片、檔案等。各格式的詳細規格將隨發布準備逐步公布。"],
    "大切にしていること": ["What we value", "소중히 여기는 것", "我们重视的事", "我們重視的事"],
    "QuickKeep独自アカウントを前提にせず、保存内容を広告ターゲティングに使用しない方針です。利用条件やプライバシーに関する詳細は、公開情報ページで確認できるよう整備します。": ["QuickKeep does not require a proprietary account and does not use saved content for ad targeting. Details about terms and privacy will be available on the information pages.", "QuickKeep은 별도 계정을 전제로 하지 않으며 저장 내용을 광고 타기팅에 사용하지 않습니다. 이용 조건과 개인정보의 자세한 내용은 안내 페이지에서 확인할 수 있도록 마련합니다.", "QuickKeep 不要求专有帐号，也不会将保存内容用于广告定向。条款和隐私详情将在信息页面中提供。", "QuickKeep 不要求專屬帳號，也不會將儲存內容用於廣告定向。條款和隱私詳情將在資訊頁面中提供。"],
    "保存、整理、検索の基本操作を掲載します。": ["Learn the basics of saving, organizing, and finding.", "저장, 정리, 검색의 기본 사용법을 안내합니다.", "介绍保存、整理和查找的基本操作。", "介紹儲存、整理和尋找的基本操作。"],
    "QuickKeepの基本操作": ["QuickKeep basics", "QuickKeep 기본 조작", "QuickKeep 基本操作", "QuickKeep 基本操作"],
    "共有シートからQuickKeepを選ぶ": ["Choose QuickKeep from the share sheet", "공유 시트에서 QuickKeep 선택", "从共享表中选择 QuickKeep", "從分享表中選擇 QuickKeep"],
    "共有シートにQuickKeepが表示されている画面": ["QuickKeep shown in the share sheet", "공유 시트에 표시된 QuickKeep", "共享表中显示的 QuickKeep", "分享表中顯示的 QuickKeep"],
    "名前を確認して保存する": ["Check the name and save", "이름을 확인하고 저장", "确认名称并保存", "確認名稱並儲存"],
    "保存したものはホームに並びます。タイトルやメモは、あとから詳細画面で編集できます。": ["Saved items appear on Home. You can edit titles and notes later in the detail screen.", "저장한 항목은 홈에 표시됩니다. 제목과 메모는 나중에 상세 화면에서 편집할 수 있습니다.", "已保存项目会显示在首页。稍后可在详情页编辑标题和备忘。", "已儲存項目會顯示在首頁。稍後可在詳細頁編輯標題和備忘。"],
    "詳細で整理する": ["Organize in Details", "상세에서 정리", "在详情中整理", "在詳細中整理"],
    "お気に入り、メモ、カテゴリ、タグ、コレクションを必要なときだけ追加できます。元のURLやファイルもここから開けます。": ["Add favorites, notes, categories, tags, and collections only when you need them. You can also open the original URL or file here.", "즐겨찾기, 메모, 카테고리, 태그, 컬렉션은 필요할 때만 추가할 수 있습니다. 원래 URL이나 파일도 여기에서 열 수 있습니다.", "仅在需要时添加收藏、备忘、类别、标签和收藏集。也可从这里打开原始 URL 或文件。", "僅在需要時新增收藏、備忘、類別、標籤和收藏集。也可從這裡開啟原始 URL 或檔案。"],
    "覚えている言葉で検索する": ["Search with words you remember", "기억나는 말로 검색", "用记得的词搜索", "用記得的詞搜尋"],
    "タイトル、メモ、カテゴリ、タグを手がかりに、あとで必要なものを探せます。": ["Use titles, notes, categories, and tags to find what you need later.", "제목, 메모, 카테고리, 태그를 단서로 나중에 필요한 것을 찾을 수 있습니다.", "通过标题、备忘、类别和标签查找日后所需内容。", "透過標題、備忘、類別和標籤尋找日後所需內容。"],
    "コレクションでまとめる": ["Group with collections", "컬렉션으로 모으기", "用收藏集归类", "用收藏集歸類"],
    "気になる保存物をコレクションに入れると、目的ごとに見返しやすくなります。": ["Put saved items into collections to make them easier to revisit by purpose.", "관심 있는 저장물을 컬렉션에 넣으면 목적별로 다시 보기 쉬워집니다.", "将感兴趣的已保存内容放入收藏集，便于按用途回顾。", "將感興趣的已儲存內容放入收藏集，便於依用途回顧。"],
    "サポート・FAQ": ["Support & FAQ", "지원 및 FAQ", "支持与常见问题", "支援與常見問題"],
    "よくある質問、問い合わせ前の確認事項、問い合わせポリシーを掲載します。": ["Find frequently asked questions, checks before contacting us, and our support policy.", "자주 묻는 질문, 문의 전 확인 사항, 문의 정책을 안내합니다.", "提供常见问题、联系前确认事项和支持政策。", "提供常見問題、聯絡前確認事項和支援政策。"],
    "FAQ": ["FAQ", "FAQ", "常见问题", "常見問題"],
    "本文は公開前に確定します。": ["This content will be finalized before release.", "본문은 공개 전에 확정됩니다.", "本文将在发布前确定。", "本文將在發布前確定。"],
    "保存、検索、共有シート、iCloud、Pro、問い合わせに関するFAQを配置予定です。": ["FAQs about saving, searching, the share sheet, iCloud, Pro, and support will be added here.", "저장, 검색, 공유 시트, iCloud, Pro, 문의 관련 FAQ를 여기에 안내할 예정입니다.", "这里将提供有关保存、搜索、共享表、iCloud、Pro 和支持的常见问题。", "這裡將提供有關儲存、搜尋、分享表、iCloud、Pro 和支援的常見問題。"],
    "問い合わせポリシー": ["Support policy", "문의 정책", "支持政策", "支援政策"],
    "送信される項目、外部サービスへの転送、返信希望時のメールアドレス、保持期間、削除相談の窓口を記載予定です。": ["This will describe submitted fields, forwarding to external services, an email address for replies, retention periods, and how to request deletion.", "전송 항목, 외부 서비스 전달, 회신용 이메일 주소, 보관 기간, 삭제 상담 창구를 안내할 예정입니다.", "将说明提交的项目、转发至外部服务、回复用电子邮件、保留期限及删除请求方式。", "將說明提交的項目、轉送至外部服務、回覆用電子郵件、保留期限及刪除請求方式。"],
    "QuickKeep Proの提供に関する情報を掲載します。": ["Information about QuickKeep Pro will appear here.", "QuickKeep Pro 제공 관련 정보를 안내합니다.", "这里将提供 QuickKeep Pro 的相关信息。", "這裡將提供 QuickKeep Pro 的相關資訊。"],
    "作成中": ["In preparation", "작성 중", "准备中", "準備中"],
    "本文は公開前に、販売者情報とPro課金の正式内容に合わせて確定します。": ["This content will be finalized before release to match seller information and the final Pro billing details.", "본문은 공개 전에 판매자 정보와 Pro 결제의 공식 내용에 맞춰 확정됩니다.", "本文将在发布前根据销售者信息和 Pro 付费的正式内容确定。", "本文將在發布前根據銷售者資訊和 Pro 付費的正式內容確定。"],
    "販売者、連絡先、販売価格、支払方法、提供時期、解約方法、返品・キャンセルの扱いを記載予定です。": ["Seller, contact details, price, payment, availability, cancellation, and return/refund terms will be listed here.", "판매자, 연락처, 가격, 결제 방법, 제공 시기, 해지 방법, 반품·취소 내용을 안내할 예정입니다.", "将列出销售者、联系方式、价格、支付方式、提供时间、取消方式和退款/取消条款。", "將列出銷售者、聯絡方式、價格、付款方式、提供時間、取消方式和退款／取消條款。"],
    "QuickKeepで扱う情報と通信について掲載します。": ["Information about data and communications in QuickKeep will appear here.", "QuickKeep에서 다루는 정보와 통신을 안내합니다.", "这里将提供 QuickKeep 处理的信息和通信说明。", "這裡將提供 QuickKeep 處理的資訊和通訊說明。"],
    "本文は公開前に、アプリの実装内容とストア申告に合わせて確定します。": ["This content will be finalized before release to match the app implementation and store disclosures.", "본문은 공개 전에 앱 구현 내용과 스토어 신고에 맞춰 확정됩니다.", "本文将在发布前根据应用实现和商店披露确定。", "本文將在發布前根據 App 實作和商店揭露確定。"],
    "ローカル保存、オンデバイスAI、任意のiCloud同期、問い合わせ転送、外部リンク、広告の扱いを記載予定です。": ["This will describe local storage, on-device AI, optional iCloud sync, support forwarding, external links, and advertising.", "로컬 저장, 기기 내 AI, 선택적 iCloud 동기화, 문의 전달, 외부 링크, 광고 처리 방침을 안내할 예정입니다.", "将说明本地存储、设备端 AI、可选 iCloud 同步、支持转发、外部链接和广告处理。", "將說明本機儲存、裝置端 AI、可選 iCloud 同步、支援轉送、外部連結和廣告處理。"],
    "QuickKeepの利用条件を掲載します。": ["QuickKeep's terms of use will appear here.", "QuickKeep 이용 조건을 안내합니다.", "这里将提供 QuickKeep 的使用条款。", "這裡將提供 QuickKeep 的使用條款。"],
    "本文は公開前に、アプリの機能、Pro課金、免責、禁止事項に合わせて確定します。": ["This content will be finalized before release to match app features, Pro billing, disclaimers, and prohibited uses.", "본문은 공개 전에 앱 기능, Pro 결제, 면책, 금지 사항에 맞춰 확정됩니다.", "本文将在发布前根据应用功能、Pro 付费、免责声明和禁止事项确定。", "本文將在發布前根據 App 功能、Pro 付費、免責聲明和禁止事項確定。"],
    "保存物の管理、Pro機能、外部サービス、問い合わせ、規約変更、準拠法などを記載予定です。": ["This will cover managing saved content, Pro features, external services, support, changes to the terms, and governing law.", "저장물 관리, Pro 기능, 외부 서비스, 문의, 약관 변경, 준거법 등을 안내할 예정입니다.", "将说明已保存内容的管理、Pro 功能、外部服务、支持、条款变更和适用法律等。", "將說明已儲存內容的管理、Pro 功能、外部服務、支援、條款變更和準據法等。"],
    "ページが見つかりません": ["Page not found", "페이지를 찾을 수 없습니다", "找不到页面", "找不到頁面"],
    "URLが変更されたか、ページがまだ公開されていない可能性があります。": ["The URL may have changed, or the page may not be published yet.", "URL이 변경되었거나 페이지가 아직 공개되지 않았을 수 있습니다.", "网址可能已更改，或页面尚未发布。", "網址可能已變更，或頁面尚未發布。"],
    "確認できるページ": ["Available pages", "확인 가능한 페이지", "可查看的页面", "可查看的頁面"],
    "トップページへ戻る": ["Return to home", "홈으로 돌아가기", "返回首页", "返回首頁"],
    "使い方、サポート・FAQ、利用規約、プライバシーポリシーなどはトップページから確認できます。": ["You can find How it works, Support & FAQ, Terms of Use, Privacy Policy, and more from the home page.", "사용 방법, 지원 및 FAQ, 이용 약관, 개인정보 처리방침 등은 홈에서 확인할 수 있습니다.", "可从首页查看使用方法、支持与常见问题、使用条款、隐私政策等。", "可從首頁查看使用方式、支援與常見問題、使用條款、隱私權政策等。"]
  };

  const documentTranslations = {
    "QuickKeep - あとで見つかる、かんたん保存。": ["QuickKeep - Save simply. Find it later.", "QuickKeep - 간편하게 저장하고, 나중에 찾으세요.", "QuickKeep - 轻松保存，稍后找到。", "QuickKeep - 輕鬆儲存，稍後找到。"],
    "QuickKeepについて | QuickKeep": ["About QuickKeep | QuickKeep", "QuickKeep 소개 | QuickKeep", "关于 QuickKeep | QuickKeep", "關於 QuickKeep | QuickKeep"],
    "使い方 | QuickKeep": ["How it works | QuickKeep", "사용 방법 | QuickKeep", "使用方法 | QuickKeep", "使用方式 | QuickKeep"],
    "サポート・FAQ | QuickKeep": ["Support & FAQ | QuickKeep", "지원 및 FAQ | QuickKeep", "支持与常见问题 | QuickKeep", "支援與常見問題 | QuickKeep"],
    "特定商取引法に基づく表記 | QuickKeep": ["Legal Notice (Japan) | QuickKeep", "특정상거래법 표기 | QuickKeep", "特定商业交易法披露 | QuickKeep", "特定商業交易法揭露 | QuickKeep"],
    "プライバシーポリシー | QuickKeep": ["Privacy Policy | QuickKeep", "개인정보 처리방침 | QuickKeep", "隐私政策 | QuickKeep", "隱私權政策 | QuickKeep"],
    "利用規約 | QuickKeep": ["Terms of Use | QuickKeep", "이용 약관 | QuickKeep", "使用条款 | QuickKeep", "使用條款 | QuickKeep"],
    "ページが見つかりません | QuickKeep": ["Page not found | QuickKeep", "페이지를 찾을 수 없습니다 | QuickKeep", "找不到页面 | QuickKeep", "找不到頁面 | QuickKeep"]
  };

  const metadata = {
    "QuickKeepは、Webページ、画像、PDF、テキストなどを共有からすばやく保存し、あとで探しやすくするiOSアプリです。": ["QuickKeep is an iOS app for saving web pages, images, PDFs, text, and more from Share, then finding them later.", "QuickKeep은 웹 페이지, 이미지, PDF, 텍스트 등을 공유 메뉴에서 빠르게 저장하고 나중에 쉽게 찾는 iOS 앱입니다.", "QuickKeep 是一款 iOS 应用，可从共享菜单快速保存网页、图片、PDF、文本等，并在稍后轻松找到。", "QuickKeep 是一款 iOS App，可從分享選單快速儲存網頁、圖片、PDF、文字等，並在稍後輕鬆找到。"],
    "QuickKeepの概要、製品方針、保存体験について掲載するページです。": ["An overview of QuickKeep, its product approach, and the saving experience.", "QuickKeep의 개요, 제품 방침, 저장 경험을 소개합니다.", "介绍 QuickKeep 概览、产品理念和保存体验。", "介紹 QuickKeep 概覽、產品理念和儲存體驗。"],
    "QuickKeepの使い方を掲載するページです。": ["Learn how to use QuickKeep.", "QuickKeep 사용 방법을 안내합니다.", "介绍 QuickKeep 的使用方法。", "介紹 QuickKeep 的使用方式。"],
    "QuickKeepのサポート、FAQ、問い合わせポリシーを掲載するページです。": ["QuickKeep support, FAQs, and support policy.", "QuickKeep 지원, FAQ, 문의 정책을 안내합니다.", "提供 QuickKeep 支持、常见问题和支持政策。", "提供 QuickKeep 支援、常見問題和支援政策。"],
    "QuickKeepの特定商取引法に基づく表記を掲載するページです。": ["QuickKeep's legal notice required under Japan's Specified Commercial Transactions Act.", "QuickKeep의 특정상거래법 표기를 안내합니다.", "提供 QuickKeep 根据日本特定商业交易法的披露。", "提供 QuickKeep 依日本特定商業交易法的揭露。"],
    "QuickKeepのプライバシーポリシーを掲載するページです。": ["QuickKeep's Privacy Policy.", "QuickKeep 개인정보 처리방침입니다.", "QuickKeep 的隐私政策。", "QuickKeep 的隱私權政策。"],
    "QuickKeepの利用規約を掲載するページです。": ["QuickKeep's Terms of Use.", "QuickKeep 이용 약관입니다.", "QuickKeep 的使用条款。", "QuickKeep 的使用條款。"],
    "QuickKeepサイトのページが見つからない場合の案内です。": ["Help when a QuickKeep site page cannot be found.", "QuickKeep 사이트 페이지를 찾을 수 없을 때의 안내입니다.", "找不到 QuickKeep 网站页面时的说明。", "找不到 QuickKeep 網站頁面時的說明。"]
  };

  function preferredLocale() {
    const requested = new URLSearchParams(location.search).get("lang");
    const stored = localStorage.getItem("quickkeep-site-language");
    const browser = navigator.language || "ja";
    const candidate = requested || stored || browser;
    if (candidate.toLowerCase().startsWith("ko")) return "ko";
    if (candidate.toLowerCase().startsWith("zh-hant") || candidate.toLowerCase().includes("tw") || candidate.toLowerCase().includes("hk")) return "zh-Hant";
    if (candidate.toLowerCase().startsWith("zh")) return "zh-Hans";
    if (candidate.toLowerCase().startsWith("en")) return "en";
    return "ja";
  }

  function translated(value, locale, dictionary = translations) {
    const index = locales.indexOf(locale) - 1;
    return index >= 0 && dictionary[value] ? dictionary[value][index] : value;
  }

  function translateNode(node, locale) {
    if (node.parentElement?.closest(".language-picker")) return;
    const source = node.nodeValue.trim();
    if (!source || !translations[source]) return;
    node.nodeValue = node.nodeValue.replace(source, translated(source, locale));
  }

  function translatePage(locale) {
    document.documentElement.lang = locale;
    document.querySelectorAll("body *").forEach((element) => {
      [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE).forEach((node) => translateNode(node, locale));
      ["alt", "aria-label", "title"].forEach((attribute) => {
        const value = element.getAttribute(attribute);
        if (value && translations[value]) element.setAttribute(attribute, translated(value, locale));
      });
    });
    const originalTitle = document.title;
    if (documentTranslations[originalTitle]) document.title = translated(originalTitle, locale, documentTranslations);
    const description = document.querySelector('meta[name="description"]');
    if (description && metadata[description.content]) description.content = translated(description.content, locale, metadata);
  }

  function addLanguagePicker(locale) {
    const picker = document.createElement("label");
    picker.className = "language-picker";
    picker.innerHTML = '<span class="sr-only">Language</span><select aria-label="Language"></select>';
    const select = picker.querySelector("select");
    locales.forEach((code) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = languageNames[code];
      option.selected = code === locale;
      select.append(option);
    });
    select.addEventListener("change", () => {
      localStorage.setItem("quickkeep-site-language", select.value);
      const url = new URL(location.href);
      url.searchParams.set("lang", select.value);
      location.assign(url);
    });
    document.querySelector(".site-header")?.append(picker);
  }

  function addLegalNotice(locale) {
    const legalPages = ["/privacy/", "/terms/", "/commerce/"];
    if (locale === "ja" || !legalPages.some((path) => location.pathname.endsWith(path))) return;
    const notice = document.createElement("p");
    notice.className = "translation-notice";
    notice.textContent = {
      en: "Reference translation. The Japanese version is the authoritative text.",
      ko: "참고 번역입니다. 일본어 버전이 정본입니다.",
      "zh-Hans": "此为参考译文。日语版本为正式文本。",
      "zh-Hant": "此為參考譯文。日文版本為正式文本。"
    }[locale];
    document.querySelector(".page-hero")?.append(notice);
  }

  const locale = preferredLocale();
  addLanguagePicker(locale);
  translatePage(locale);
  addLegalNotice(locale);
})();
