import HeroAvatar from '@/public/images/hero-avatar.jpg';
import PortfolioImg from '@/public/images/portfolio-img.png';
import MainImage from '@/public/images/portfolio-single.png';
import TestimonialAvatar from '@/public/images/testimonial-avatar.jpg';
import Logo from '@/public/images/client-logo.png';
import PostImage from '@/public/images/blog-img.png'
import Image from '@/public/images/blog-single.png';
import BaycrewsImg from '@/public/images/baycrews_1.png';
import BaycrewsImg2x from '@/public/images/baycrews_2.png';
import CorpImg from '@/public/images/corp.png';
import KithImg from '@/public/images/kith.png';
import LikesImg from '@/public/images/likes.png';
import MastermindImg from '@/public/images/mastermind.png';
import RescueForcePoster from '@/public/images/tomica.png';
import RescueForceWeb from '@/public/images/rescue.png';
import BloganceImg from '@/public/images/autoblog.png';
import CampSnapImg from '@/public/images/campsnap.png';
import MediaImg1 from '@/public/images/media1.png';
import MediaImg2 from '@/public/images/media2.png';
import MediaImg3 from '@/public/images/media3.jpg';
import HostelImg1 from '@/public/images/hostel1.png';
import HostelImg2 from '@/public/images/hostel2.png';
import RoadTrainImg from '@/public/images/road-train.png';

export const headerData = {
    mainData: {
        firstName: 'Tamagawa',
        secondName: 'Portfolio',
        phone: '+81 80 5055 2585',
        email: 'designboost@gmail.com',
        copywriter: '2024',
        socialLinks: [
            {
                icon: 'bi bi-github',
                url: 'https://github.com/'
            },
            {
                icon: 'bi bi-twitter-x',
                url: 'https://twitter.com/'
            },
            {
                icon: 'bi bi-linkedin',
                url: 'https://linkedin.com/'
            },
        ]
    },
    links: [
        {
            name: 'ポートフォリオ',
            url: '#'
        },
    ],
    socialLinks: [
        {
            name: 'GH',
            url: 'https://github.com/'
        },
        {
            name: 'TW',
            url: 'https://twitter.com/'
        },
        {
            name: 'IN',
            url: 'https://linkedin.com/'
        },
        {
            name: 'FB',
            url: '#'
        },
        {
            name: 'IG',
            url: '#'
        },
    ]
};


export const aboutData = {
    mainData: {
        title: "About Me",
        title2: "About Me",
        heroAvatar: HeroAvatar,
        jobTitle: "UI＆UX Designer\nWEB Director\nProduct Manager",
        description: "UI/UXデザインからデジタル戦略まで、事業成長を実現するための包括的な支援が可能です。ECプラットフォーム開発やモバイルアプリ運用の経験を活かし、使いやすさと事業KPI達成を両立するソリューションを提案します。",
        yearsOfExperience: "26",
        hoursOfWorking: "52",
        companiesWorked: "5",
        typewriter: ['UI＆UX Designer', 'WEB Director', 'Product Manager'],
    },
    skills: [
        {
            id: 1,
            name: 'デザイン',
            percent: '25',
            icon: 'bi bi-palette',
        },
        {
            id: 2,
            name: 'デジタル事業戦略',
            percent: '14',
            icon: 'bi bi-graph-up',
        },
        {
            id: 3,
            name: 'プロジェクト管理',
            percent: '10',
            icon: 'bi bi-kanban',
        },
        {
            id: 4,
            name: 'UI&UX戦略',
            percent: '14',
            icon: 'bi bi-layout-text-window',
        },
    ]
};

export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "ポートフォリオ",
        description: "過去のプロジェクト実績の一部です。詳細は個別にお問い合わせください。"
    },
    filterCategories: ["Show All", "E-commerce", "WEBサイト", "CMS開発", "プロモーション", "iOSアプリ", "不動産開発", "プロダクトデザイン"],
    projects: [
        {
            projectTitle: 'Blogance - AI Persona Writer',
            slug: 'blogance-ai-persona-writer',
            description: 'Shopify ECサイト向けの有償アプリ開発プロジェクト。「店長」や「バイヤー」などの架空のペルソナを設定すると、その人物になりきった文体でブログを自動投稿し続けるEC運営補助システム。2025年2月下旬にリリースし、現在海外中心に10サイト程度まで導入。要件定義、UI、デザインを担当し、バックエンド部分は友人に依頼。',
            keywords: 'Shopify, AI, ブログ自動生成, EC運営補助, SaaS',
            category: 'E-commerce',
            services: '要件定義, UI/UXデザイン, デザイン',
            client: 'ECboost',
            duration: '2025年2月リリース',
            mainImage: BloganceImg,
            images: [
                {
                    image: BloganceImg,
                    alt: 'Blogance - AI Persona Writer アプリ画面'
                }
            ],
            imagesLightbox: {
                image: BloganceImg,
                alt: 'Blogance - AI Persona Writer アプリ画面'
            },
            referenceUrl: 'https://x.gd/yeqIt',
            categories: [
                { name: 'E-commerce' }
            ],
            techStack: [
                { name: 'Shopify App', icon: 'bi bi-shop' },
                { name: 'React', icon: 'bi bi-code-slash' },
                { name: 'TypeScript', icon: 'bi bi-filetype-tsx' },
                { name: 'Shopify Polaris', icon: 'bi bi-layout-text-window' },
                { name: 'ChatGPT 3.5 API', icon: 'bi bi-robot' },
                { name: 'GraphQL', icon: 'bi bi-diagram-3' }
            ],
            features: [
                { name: 'ペルソナ設定機能', description: '店長やバイヤーなど最大3名までAI著者スタイルを事前設定可能' },
                { name: '自動ブログ投稿', description: '設定したペルソナになりきった文体でブログ記事を自動生成・投稿' },
                { name: '商品リンク自動挿入', description: 'SEO効果を高めるため、記事内に商品リンクを自動挿入' },
                { name: '予約投稿機能', description: '最適な公開タイミングを設定し、継続的なコンテンツマーケティングを実現' }
            ]
        },
        {
            projectTitle: 'CampSnap | キャンプスナップ',
            slug: 'campsnap',
            description: '趣味のキャンプログ用アプリが欲しくなり、勉強の一貫として開発したiOSアプリ。カメラで切り取った一瞬に、ひとこと添えてアップするキャンプの記録アプリ。2025年2月下旬にリリース。技術的な実験の場として今後も開発継続予定。開発もデザインも全て自分一人で担当。',
            keywords: 'iOS, キャンプ, ログ, 写真, 地図連携, 天気',
            category: 'iOSアプリ',
            services: '要件定義, UI/UXデザイン, デザイン, フロントエンド開発, バックエンド開発',
            client: '個人プロジェクト',
            duration: '2025年2月リリース',
            mainImage: CampSnapImg,
            images: [
                {
                    image: CampSnapImg,
                    alt: 'CampSnap iOSアプリ画面'
                }
            ],
            imagesLightbox: {
                image: CampSnapImg,
                alt: 'CampSnap iOSアプリ画面'
            },
            categories: [
                { name: 'iOSアプリ' }
            ],
            techStack: [
                { name: 'Swift', icon: 'bi bi-apple' },
                { name: 'iOS', icon: 'bi bi-phone' },
                { name: 'Firebase', icon: 'bi bi-cloud' },
                { name: 'BunnyCDN', icon: 'bi bi-cloud-arrow-down' },
                { name: 'Algolia', icon: 'bi bi-search' }
            ],
            features: [
                { name: '写真とコメント投稿', description: 'カメラで切り取った一瞬に、ひとこと添えてアップするシンプルなキャンプログ機能' },
                { name: '地図連携', description: 'MAP連携でルートや所要時間を簡単にチェック可能' },
                { name: '天気・気温表示', description: 'キャンプ場の天気や気温、日の出・日の入り時刻を簡単にチェック' },
                { name: '検索機能', description: 'Algoliaによる高速な検索機能で過去のキャンプログを素早く見つけられる' }
            ]
        },
        {
            projectTitle: 'BAYCREW\'S Store WEB&アプリ改善',
            slug: 'baycrews-app',
            description: 'アパレルEC企業のデジタル施策改善プロジェクト。Web to App戦略により、売上を伸ばしながら広告費を削減し、利益率改善に貢献しました。アプリCVRはWebの約2倍を実現。',
            keywords: 'EC, モバイルアプリ, UI/UX, CRM',
            category: 'E-commerce',
            services: 'プロジェクト管理, UI/UXデザイン, 開発ディレクション',
            client: '株式会社ベイクルーズ',
            duration: '7年',
            mainImage: BaycrewsImg,
            images: [
                {
                    image: BaycrewsImg2x,
                    alt: 'BAYCREW\'S アプリ詳細'
                }
            ],
            imagesLightbox: {
                image: BaycrewsImg2x,
                alt: 'BAYCREW\'S アプリ詳細'
            },
            video: {
                thumbnail: BaycrewsImg,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            categories: [
                { name: 'E-commerce' },
                { name: 'UI/UX' }
            ],
            techStack: [
                { name: 'emPlex', icon: 'bi bi-cart' },
                { name: 'Akamai', icon: 'bi bi-hdd-network' },
                { name: 'AWS EC2/S3', icon: 'bi bi-cloud' },
                { name: 'PHP/Laravel', icon: 'bi bi-filetype-php' },
                { name: 'Swift', icon: 'bi bi-apple' },
                { name: 'Kotlin', icon: 'bi bi-android2' },
                { name: 'HTML/CSS/jQuery', icon: 'bi bi-code-slash' },
                { name: 'Zeta search', icon: 'bi bi-search' },
                { name: 'シルバーエッグ・テクノロジー', icon: 'bi bi-box-arrow-up-right' },
                { name: 'Syte 画像認識AI', icon: 'bi bi-camera' },
                { name: 'Oracle', icon: 'bi bi-database' },
                { name: 'Karte', icon: 'bi bi-graph-up' },
                { name: 'セールスフォースMC', icon: 'bi bi-cloud-arrow-up' },
                { name: 'Tealium', icon: 'bi bi-tags' },
                { name: 'sendGrid', icon: 'bi bi-envelope' },
                { name: 'Webcas', icon: 'bi bi-send' },
                { name: 'GA4/BigQuery', icon: 'bi bi-bar-chart' },
                { name: '社内在庫管理システム', icon: 'bi bi-box-seam' }
            ],
        },
        {
            projectTitle: 'LIKES コンテンツプラットフォーム',
            slug: 'content-cms',
            description: '高額なSaaS型CMSからの脱却を目指し、スクラッチで開発したコンテンツプラットフォーム。店舗スタッフはiOSアプリから、本社スタッフはWebから投稿可能なハイブリッド設計を採用。ZOZOTOWNのWEAR、ユニクロのスタイルヒントに相当するベイクルーズ版として、SNS的機能も備え、一般ユーザーとのコミュニケーション機能も実装。APIを介してベイクルーズストアのコーディネート表示にも活用される予定。現在は仮運用段階で、2025年8月末の正式リリースを目指しています。',
            keywords: 'CMS, コンテンツ管理, バックオフィス',
            category: 'CMS開発',
            client: '株式会社ベイクルーズ',
            duration: '1年',
            mainImage: LikesImg,
            images: [
                {
                    image: LikesImg,
                    alt: 'LIKES コンテンツプラットフォーム'
                }
            ],
            imagesLightbox: {
                image: LikesImg,
                alt: 'LIKES コンテンツプラットフォーム'
            },
            categories: [
                { name: 'CMS開発' },
                { name: 'バックオフィス' }
            ],
            referenceUrl: 'https://apps.apple.com/jp/app/likes-%E5%A5%BD%E3%81%8D%E3%81%8C%E8%A6%8B%E3%81%A4%E3%81%8B%E3%82%8B%E3%83%95%E3%82%A1%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3-%E3%83%A9%E3%82%A4%E3%83%95%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E6%A4%9C%E7%B4%A2/id6504402910',
            techStack: [
                { name: 'AWS EC2/S3', icon: 'bi bi-cloud' },
                { name: 'GCP Vertex AI', icon: 'bi bi-boxes' },
                { name: 'Ruby', icon: 'bi bi-gem' },
                { name: 'React', icon: 'bi bi-code-slash' },
                { name: 'Swift', icon: 'bi bi-apple' },
                { name: 'iOS アプリ', icon: 'bi bi-phone' },
                { name: 'Web管理画面', icon: 'bi bi-laptop' },
                { name: 'API連携', icon: 'bi bi-link-45deg' },
                { name: 'SNS機能', icon: 'bi bi-chat-dots' }
            ],
            features: [
                { name: 'マルチデバイス対応', description: '店舗スタッフ向けiOSアプリと本社スタッフ向けWeb管理画面の両方を提供' },
                { name: 'コーディネート投稿', description: '商品画像とスタイリングのコーディネート情報をワンタップで投稿可能' },
                { name: 'AI画像認識', description: 'GCP Vertex AIによる画像認識で類似コーディネートを自動検索' },
                { name: 'ユーザーエンゲージメント', description: 'いいね、コメント、フォロー機能によるSNS的なコミュニケーション' },
                { name: 'ECサイト連携', description: 'ベイクルーズストアとAPI連携し、コーディネート情報を商品ページに表示' },
                { name: 'コンテンツ分析', description: '投稿のエンゲージメント率や閲覧数などの詳細な分析機能' },
                { name: '権限管理', description: '店舗スタッフ、本社スタッフ、一般ユーザーの3階層の権限設定' },
                { name: 'コンテンツモデレーション', description: '不適切なコンテンツを自動検知するAIフィルタリング' }
            ],
        },
        {
            projectTitle: 'mastermind JAPAN EC',
            slug: 'mastermind-ec',
            description: '裏原ブームの時に一世を風靡した高級ストリートブランドmastermind JAPANの公式ECサイト開発。ベイクルーズが小売ライセンスを取得し、店舗販売に加えECサイトを構築。高額商品のため中国本土、香港、韓国の富裕層向けの越境ECを前提とした設計。ShopifyのLiquid Templatesを用いて本格的なデザインを実現し、モバイルアプリはAppifyというソリューションで開発。',
            keywords: 'EC, ラグジュアリーブランド, UI/UX, 越境EC, Shopify, Liquid',
            category: 'E-commerce',
            client: '株式会社ベイクルーズ',
            duration: '9ヶ月',
            mainImage: MastermindImg,
            images: [
                {
                    image: MastermindImg,
                    alt: 'mastermind JAPAN EC'
                }
            ],
            imagesLightbox: {
                image: MastermindImg,
                alt: 'mastermind JAPAN EC'
            },
            categories: [
                { name: 'E-commerce' },
                { name: 'UI/UX' }
            ],
            referenceUrl: 'https://mastermindtokyo.com/',
            techStack: [
                { name: 'Shopify', icon: 'bi bi-shop' },
                { name: 'Liquid Templates', icon: 'bi bi-droplet' },
                { name: 'JavaScript', icon: 'bi bi-filetype-js' },
                { name: 'HTML/CSS', icon: 'bi bi-filetype-html' },
                { name: 'React', icon: 'bi bi-code-slash' },
                { name: 'Node.js', icon: 'bi bi-server' },
                { name: 'GraphQL', icon: 'bi bi-diagram-3' },
                { name: 'Python', icon: 'bi bi-code' },
                { name: 'Appify', icon: 'bi bi-phone' },
                { name: 'レスポンシブデザイン', icon: 'bi bi-display' },
                { name: '多言語対応', icon: 'bi bi-translate' },
                { name: '多通貨決済', icon: 'bi bi-currency-exchange' },
                { name: '越境EC対応', icon: 'bi bi-globe' },
                { name: 'Shopify Apps', icon: 'bi bi-puzzle' }
            ],
        },
        {
            projectTitle: 'BAYCREW\'S コーポレートサイト',
            slug: 'baycrews-corp',
            description: '高額なサイバーエージェント系列の企業向けCMSからWordPressへのリニューアル対応。コスト削減と社内保守を実現しました。WordPress専用サーバーKinstaを導入し、若手スタッフの教育も兼ねたプロジェクトとして展開。自身はマネジメントを担当しました。',
            keywords: 'コーポレートサイト, WordPress, CMS移行, 若手教育',
            category: 'WEBサイト',
            client: '株式会社ベイクルーズ',
            duration: '6ヶ月',
            mainImage: CorpImg,
            images: [
                {
                    image: CorpImg,
                    alt: 'BAYCREW\'S コーポレートサイト'
                }
            ],
            imagesLightbox: {
                image: CorpImg,
                alt: 'BAYCREW\'S コーポレートサイト'
            },
            categories: [
                { name: 'WEBサイト' },
                { name: 'UI/UX' }
            ],
            referenceUrl: 'https://baycrews.co.jp/',
            techStack: [
                { name: 'WordPress', icon: 'bi bi-wordpress' },
                { name: 'Kinsta', icon: 'bi bi-cloud' },
                { name: 'PHP', icon: 'bi bi-filetype-php' },
                { name: 'MySQL', icon: 'bi bi-database' },
                { name: 'HTML/CSS', icon: 'bi bi-filetype-html' },
                { name: 'JavaScript', icon: 'bi bi-filetype-js' },
                { name: 'レスポンシブデザイン', icon: 'bi bi-phone' },
                { name: 'キャッシュ最適化', icon: 'bi bi-speedometer2' },
                { name: 'CDN', icon: 'bi bi-cloud-arrow-down' },
                { name: 'セキュリティ対策', icon: 'bi bi-shield-check' }
            ]
        },
        {
            projectTitle: 'KITH オウンドサイト',
            slug: 'kith-site',
            description: 'ニューヨーク発のストリートブランドKITHの日本公式サイト開発。国内店頭販売ライセンスを持つベイクルーズが、本国と統一感を持たせるためShopifyプラットフォームで開発。精緻なビジュアル表現と本国基準に合わせた実装により、2026年には国内EC権利獲得にも成功。',
            keywords: 'Shopify, ブランドサイト, UI/UX, グローバル展開',
            category: 'WEBサイト',
            client: '株式会社ベイクルーズ',
            duration: '4ヶ月',
            mainImage: KithImg,
            images: [
                {
                    image: KithImg,
                    alt: 'KITH オウンドサイト'
                }
            ],
            imagesLightbox: {
                image: KithImg,
                alt: 'KITH オウンドサイト'
            },
            categories: [
                { name: 'WEBサイト' },
                { name: 'E-commerce' }
            ],
            referenceUrl: 'https://kithtokyo.com/',
            techStack: [
                { name: 'Shopify', icon: 'bi bi-shop' },
                { name: 'Liquid', icon: 'bi bi-droplet' },
                { name: 'JavaScript', icon: 'bi bi-filetype-js' },
                { name: 'HTML/CSS', icon: 'bi bi-filetype-html' },
                { name: 'Shopify Apps', icon: 'bi bi-puzzle' },
                { name: 'レスポンシブデザイン', icon: 'bi bi-phone' },
                { name: 'ページ速度最適化', icon: 'bi bi-speedometer2' },
                { name: 'SEO対策', icon: 'bi bi-search' },
                { name: 'マルチ言語対応', icon: 'bi bi-translate' },
                { name: 'インターナショナル配送', icon: 'bi bi-globe' }
            ],
        },
        {
            projectTitle: 'MOA HOSTEL - 事業用ビルコンバージョン',
            slug: 'moa-hostel',
            description: '新規事業部に異動し、課長として取り組んだプロジェクト。東京オリンピックを前に観光立国政策が進む中、事業用ビルをバックパッカー向けのゲストハウスにコンバージョンした。消防法や旅館業法をクリアし、投資回収期間を短縮する設計を実現。建築士と協力しながらビルのデザインや工事立会、IoTを活用した運営効率化を担当。また、宿泊予約サイトコントローラー「temairazu（手間いらず）」を導入し、じゃらんやブッキングドットコムでの在庫管理やダイナミックプライシングによる収益最大化施策にも取り組んだ。最終的にコロナ禍により事業は閉鎖しビルは売却されたが、トータルでは黒字を達成。',
            keywords: '不動産開発, 建築, リノベーション, ゲストハウス, 旅館業法, 消防法, IoT, 投資回収, temairazu, 宿泊予約管理, ダイナミックプライシング',
            category: '不動産開発',
            services: 'プロジェクト管理, 不動産選定, 建築設計協力, 工事立会, IoT導入, 運営効率化, 宿泊予約システム導入, 収益管理',
            client: '株式会社MOA（現エクスプライス株式会社）',
            duration: '2016年4月 - 2017年12月',
            mainImage: HostelImg1,
            images: [
                {
                    image: HostelImg1,
                    alt: 'MOA HOSTEL 外観'
                },
                {
                    image: HostelImg2,
                    alt: 'MOA HOSTEL 内装'
                }
            ],
            imagesLightbox: {
                image: HostelImg1,
                alt: 'MOA HOSTEL 外観'
            },
            categories: [
                { name: '不動産開発' }
            ],
            techStack: [
                { name: '建築設計', icon: 'bi bi-building' },
                { name: '消防法対応', icon: 'bi bi-shield-check' },
                { name: '旅館業法対応', icon: 'bi bi-file-earmark-check' },
                { name: 'IoT', icon: 'bi bi-wifi' },
                { name: '不動産投資分析', icon: 'bi bi-graph-up' },
                { name: '工事管理', icon: 'bi bi-tools' },
                { name: 'temairazu（手間いらず）', icon: 'bi bi-calendar-check' },
                { name: 'じゃらん連携', icon: 'bi bi-link-45deg' },
                { name: 'Booking.com連携', icon: 'bi bi-globe' },
                { name: 'ダイナミックプライシング', icon: 'bi bi-graph-up-arrow' }
            ],
            features: [
                { name: '法規制クリア', description: '消防法と旅館業法の両方をクリアできる物件選定と設計' },
                { name: '投資回収期間の最適化', description: '都内の事業用不動産を分析し、投資回収期間が短い物件を選定' },
                { name: '建築設計協力', description: '建築士と協力しながら、バックパッカー向けの機能的なデザインを実現' },
                { name: 'IoT活用', description: '運営効率化のため、IoTデバイスを活用した自動化システムを導入' },
                { name: '工事立会', description: 'コンバージョン工事の立会いを行い、設計意図の実現をサポート' },
                { name: '宿泊予約システム導入', description: 'temairazu（手間いらず）を導入し、複数の予約サイトを一元管理' },
                { name: '在庫管理の最適化', description: 'じゃらんやブッキングドットコムでの在庫管理を効率化し、ダブルブッキングを防止' },
                { name: 'ダイナミックプライシング', description: '需要に応じた料金設定により収益最大化を実現' }
            ],
            address: '2-8-5 Iwamoto-cho, Chiyoda-ku, Akihabara, Tokyo, Japan, 101-0032',
            referenceUrl: 'https://www.temairazu.com/'
        },
        {
            projectTitle: 'トミカヒーロー レスキューフォース 爆裂MOVIE',
            slug: 'rescue-force-movie',
            description: '劇場版「トミカヒーロー レスキューフォース」キャンペーンにおいて、映画ポスター、公式サイト（フルFlashで作成）、パンフレット、劇場ノベルティまで一括でデザインを担当。子ども向け作品らしいワクワク感と、レスキューマシンの重厚さを両立させるため、カラーリングやレイアウトを統一しながら各媒体に最適化しました。',
            keywords: '映画プロモーション, グラフィック, WEB, パンフレット, ノベルティ',
            category: 'プロモーション',
            services: 'アートディレクション, WEBデザイン, グラフィック制作, ノベルティ企画',
            client: 'トミカヒーロープロジェクト',
            duration: '4ヶ月',
            mainImage: RescueForcePoster,
            images: [
                {
                    image: RescueForcePoster,
                    alt: 'トミカヒーロー レスキューフォース劇場版ポスター'
                },
                {
                    image: RescueForceWeb,
                    alt: 'トミカヒーロー レスキューフォース公式サイト（Flash）'
                }
            ],
            imagesLightbox: {
                image: RescueForcePoster,
                alt: 'トミカヒーロー レスキューフォース劇場版ポスター'
            },
            categories: [
                { name: 'プロモーション' },
                { name: 'WEBサイト' },
                { name: 'グラフィック' }
            ],
            techStack: [
                { name: 'Adobe Photoshop', icon: 'bi bi-brush' },
                { name: 'Adobe Illustrator', icon: 'bi bi-pen' },
                { name: 'Adobe InDesign', icon: 'bi bi-journal-richtext' },
                { name: 'Adobe Flash', icon: 'bi bi-lightning' },
                { name: 'ActionScript 2.0', icon: 'bi bi-code-slash' },
                { name: 'HTML/CSS', icon: 'bi bi-filetype-html' },
                { name: 'After Effects', icon: 'bi bi-film' }
            ],
            features: [
                { name: 'メディア横断の統一感', description: 'ポスターからWeb、パンフレット、ノベルティまで共通トーンでブランド体験を構築' },
                { name: '子ども向けUX', description: '公式サイトではキャラクター紹介やムービー視聴導線を強調し、操作感をシンプルに調整' },
                { name: '大量印刷を想定したデータ管理', description: '劇場配布物に合わせたカラーマネジメントと入稿データテンプレートを整備' }
            ],
            referenceUrl: 'https://vgmdb.net/album/119219'
        },
        {
            projectTitle: 'こども用乗り物遊具 - ショッピングモール向けSL列車',
            slug: 'road-train',
            description: 'ショッピングモールなどで走らせるこども用の乗り物遊具のデザイン・設計プロジェクト。先頭車両はゴルフカートのベースに、弁慶という蒸気機関車（SL）をデフォルメした外装（ボディ）を載せた構造。後ろの3両は木製で、先頭車両が牽引する形式。3DCADソフトを使用して全体のデザインと構造設計を行い、下町の町工場に出向いて溶接などの製造工程を直接依頼・管理した。煙突にはスモークマシンを仕込んで煙を出す機能を実装し、ノスタルジックな音楽やSLの汽笛をPA（Public Address）システムで再生できる仕様とした。',
            keywords: 'プロダクトデザイン, 工業デザイン, 3DCAD, 構造設計, 遊具, ショッピングモール, 製造管理, スモークマシン, PAシステム',
            category: 'プロダクトデザイン',
            services: 'プロダクトデザイン, 3DCAD設計, 構造設計, 製造管理, 外装デザイン',
            client: '株式会社童夢',
            duration: '2009年頃（約6ヶ月）',
            mainImage: RoadTrainImg,
            images: [
                {
                    image: RoadTrainImg,
                    alt: 'こども用乗り物遊具 - ショッピングモール向けSL列車'
                }
            ],
            imagesLightbox: {
                image: RoadTrainImg,
                alt: 'こども用乗り物遊具 - ショッピングモール向けSL列車'
            },
            categories: [
                { name: 'プロダクトデザイン' }
            ],
            techStack: [
                { name: '3DCAD', icon: 'bi bi-box-seam' },
                { name: 'プロダクトデザイン', icon: 'bi bi-palette' },
                { name: '構造設計', icon: 'bi bi-diagram-3' },
                { name: '外装デザイン', icon: 'bi bi-brush' },
                { name: '製造管理', icon: 'bi bi-tools' },
                { name: '溶接工程管理', icon: 'bi bi-gear' },
                { name: 'スモークマシン', icon: 'bi bi-cloud' },
                { name: 'PAシステム', icon: 'bi bi-speaker' }
            ],
            features: [
                { name: '3DCADによる設計', description: '3次元CADソフトを使用して全体のデザインと構造設計を実施' },
                { name: 'ハイブリッド構造', description: '先頭車両はゴルフカートベースにSLをデフォルメした外装を組み合わせた構造' },
                { name: '牽引式設計', description: '後ろの3両は木製で、先頭車両が牽引するシンプルな構造' },
                { name: 'スモークマシン機能', description: '煙突にスモークマシンを仕込んで、本物のSLのような煙を演出' },
                { name: 'PAシステムによる音響演出', description: 'ノスタルジックな音楽やSLの汽笛をPAシステムで再生し、臨場感を高める' },
                { name: '製造工程管理', description: '下町の町工場に出向き、溶接などの製造工程を直接依頼・管理' },
                { name: '安全性への配慮', description: 'こどもが乗る遊具として、安全性を最優先に設計' }
            ]
        },
    ]
};

export const servicesData = {
    mainData: {
        title: "Skill Set",
        title2: "スキルセット",
        description: "これまでに経験してきた技術領域です"
    },
    services: [
        {
            number: '01',
            icon: 'bi bi-code-slash',
            title: 'フロントエンド開発',
            description: 'React、Next.js、TypeScriptを使用したモダンなウェブアプリケーションの開発。jQueryを用いた開発経験もあります。レスポンシブデザインと高パフォーマンスを重視します。',
        },
        {
            number: '02',
            icon: 'bi bi-server',
            title: 'バックエンド連携',
            description: 'Firebaseなどのサーバレス環境を用いた経験があります。REST APIを理解し、フロントエンド開発での連携対応が可能です。ピュアPHPでの開発やWordPressのカスタマイズ経験もあります。',
        },
        {
            number: '03',
            icon: 'bi bi-palette',
            title: 'UI/UXデザイン',
            description: 'Figmaを用いたモダンでユーザーフレンドリーなUI/UXデザイン。使いやすさとビジュアルの美しさを両立したデザインを提供します。',
        },
        {
            number: '04',
            icon: 'bi bi-lightning',
            title: 'ウェブパフォーマンス最適化',
            description: '既存ウェブサイトの表示速度とユーザー体験の改善。SEOに配慮したパフォーマンス最適化を行います。',
        },
        {
            number: '05',
            icon: 'bi bi-graph-up-arrow',
            title: 'WEBマーケティング',
            description: '広告の最適化やSNSマーケティング、CRM設計など、デジタルマーケティング全般をサポート。データドリブンな施策で成果を最大化します。',
        },
    ]
};


export const testimonialData = {
    mainData: {
        title: "Testimonial",
        title2: "What People Say",
    },
    testimonial: [
        {
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis',
            name: 'Sandra Radford',
            jobTitle: 'Project Manager',
            avatar: TestimonialAvatar,
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis',
            name: 'Sandra Radford',
            jobTitle: 'Project Manager',
            avatar: TestimonialAvatar,
        },
        {
            description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Cum sociis natoque penatibus et magnis',
            name: 'Sandra Radford',
            jobTitle: 'Project Manager',
            avatar: TestimonialAvatar,
        },
    ]
};

export const resumeData = {
    mainData: {
        title: "Resume",
        title2: "学歴と職歴",
        description: "これまでの学歴と職務経験について紹介します"
    },
    education: [
        {
            date: '1988.04 - 1991.03',
            degree: '小学校',
            university: '@福島県立鶴城小学校',
        },
        {
            date: '1991.04 - 1994.03',
            degree: '中学校',
            university: '@福島県会津若松市立第二中学校',
        },
        {
            date: '1994.04 - 1997.03',
            degree: '高校 電子科',
            university: '@福島県立会津工業高等学校',
        },
        {
            date: '1997.04 - 1999.03',
            degree: '専門学校 デジタルデザイン学科',
            university: '@日本工学院専門学校',
        },
    ],
    experience: [
        {
            date: '1999.04 - 2006.03',
            degree: 'グラフィックデザイナー / DTPオペレーター',
            university: '@株式会社共栄コーポレーション',
        },
        {
            date: '2006.03 - 2010.03',
            degree: 'WEBディレクター / UIデザイナー',
            university: '@株式会社童夢',
        },
        {
            date: '2010.04 - 2017.12',
            degree: 'ECディレクター / UIUXリード',
            university: '@株式会社MOA（現エクスプライス株式会社）',
        },
        {
            date: '2018.03 - 2024.12',
            degree: 'ECプロダクトマネージャー',
            university: '@株式会社ベイクルーズ',
        },
        {
            date: '2025.06 - 現在',
            degree: 'デジタル戦略 / プロダクトマネージャー',
            university: '@株式会社ジンズ',
        },
    ]
};


export const mediaData = {
    mainData: {
        title: "Media Coverage",
        title2: "メディア掲載",
        description: "業務を通じて得た知見を共有する機会として、セミナー登壇や取材を受ける機会がありました。以下の内容は私をご判断いただくための参考資料としてご覧ください。"
    },
    media: [
        {
            title: 'ベイクルーズ執行役員玉川氏による「フリクションレスな顧客体験の重要性について」をテーマとしたセミナーの開催',
            url: 'https://prtimes.jp/main/html/rd/p/000000103.000057359.html',
            description: 'オムニチャネルやOMO、ユニファイドコマースといった時代のバズワードに流されず、顧客中心で考えましょう、といった旨のセミナーを行いました。',
            thumbnail: MediaImg1,
            source: 'PR TIMES',
            date: '2024年'
        },
        {
            title: 'EC売上500億円突破！ベイクルーズがZETA SEARCH活用で取り組む、サイト内検索のUX向上',
            url: 'https://eczine.jp/article/detail/9256',
            description: '国内の検索エンジンサービスを提供する企業の販促記事です。',
            thumbnail: MediaImg2,
            source: 'ECzine',
            date: '2024年'
        },
        {
            title: 'レビュー収集率が20倍以上に？！「YOTPO」の活用で、ECサイトのSEO強化＆運営を効率化',
            url: 'https://seleck.cc/619',
            description: '家電EC企業時代、イスラエルのレビューツールを導入した際の取材です。',
            thumbnail: MediaImg3,
            source: 'Seleck',
            date: '2024年'
        },
    ]
};


export const blogData = {
    mainData: {
        title: "Blog",
        title2: "Latest Blog Posts",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore"
    },
    posts: [
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Nov 25',
            postedBy: 'admin',
            image: PostImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
            images: [
                {
                    image: Image,
                    alt: 'Image Alt'
                }
            ],
            imagesLightbox: {
                image: Image,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: Image,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            tags: [
                { name: '#Tag1' },
                { name: '#Tag2' },
                { name: '#Tag3' }
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Nov 25',
            postedBy: 'admin',
            image: PostImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
            images: [
                {
                    image: Image,
                    alt: 'Image Alt'
                }
            ],
            imagesLightbox: {
                image: Image,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: Image,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            tags: [
                { name: '#Tag1' },
                { name: '#Tag2' },
                { name: '#Tag3' }
            ]
        },
        {
            title: 'Blog Post Title',
            slug: 'blog-post-title-2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            keywords: 'key1, key2, key3',
            category: 'Category',
            date: 'Nov 25',
            postedBy: 'admin',
            image: PostImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Medium Heading</h4> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> </div> <div class="col-12"> <h4 class="fw-medium">Custom Circle List</h4> <ul class="list-circle"> <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li> <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li> <li>Excepteur sint occaecat cupidatat non proident, sunt in culpa</li> </ul> </div></div>',
            images: [
                {
                    image: Image,
                    alt: 'Image Alt'
                }
            ],
            imagesLightbox: {
                image: Image,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: Image,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            tags: [
                { name: '#Tag1' },
                { name: '#Tag2' },
                { name: '#Tag3' }
            ]
        },
    ],

};

export const contactData = {
    mainData: {
        title: "Contact",
        title2: "Get in touch",
        title3: "連絡先",
        description: "お問い合わせは電話またはメールでお願いいたします。",
        name: "玉川 寛一",
        nameFurigana: "たまがわ かんいち",
        birthdate: "1978年5月1日生",
        age: "満47歳",
        gender: "男",
        postalCode: "〒225-0002",
        address: "神奈川県横浜市青葉区美しが丘1-19-2 4-8-103",
        nearestStation: "東急田園都市線たまプラーザ駅徒歩10分",
        phone: "+81 80 5055 2585",
        email: "designboost@gmail.com",
        hobbies: ["キャンプ", "DIY"],
    }
};

export const mapData = {
    mainData: {
        lat: -3.745,
        lng: -38.523,
    },
};