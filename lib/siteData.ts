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

export const headerData = {
    mainData: {
        firstName: 'Tamagawa',
        secondName: 'Portfolio',
        phone: '+81 90 1234 5678',
        email: 'example@example.com',
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
        title: "自己紹介",
        title2: "About Me",
        heroAvatar: HeroAvatar,
        jobTitle: "UI＆UX Designer\nWEB Director\nProduct Manager",
        description: "UI/UXデザインからデジタル戦略まで、事業成長を実現するための包括的な支援が可能です。ECプラットフォーム開発やモバイルアプリ運用の経験を活かし、使いやすさと事業KPI達成を両立するソリューションを提案します。",
        yearsOfExperience: "26",
        hoursOfWorking: "51",
        companiesWorked: "4",
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
        title2: "My Latest Works",
        description: "過去のプロジェクト実績の一部です。詳細は個別にお問い合わせください。"
    },
    filterCategories: ["Show All", "EC開発", "WEBサイト", "CMS開発"],
    projects: [
        {
            projectTitle: 'BAYCREW\'S Store WEB&アプリ改善',
            slug: 'baycrews-app',
            description: 'アパレルEC企業のデジタル施策改善プロジェクト。Web to App戦略により、売上を伸ばしながら広告費を削減し、利益率改善に貢献しました。アプリCVRはWebの約2倍を実現。',
            keywords: 'EC, モバイルアプリ, UI/UX, CRM',
            category: 'EC開発',
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
                { name: 'EC開発' },
                { name: 'アプリ開発' },
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
            category: 'EC開発',
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
                { name: 'EC開発' },
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
                { name: 'EC開発' }
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
    ]
};

export const servicesData = {
    mainData: {
        title: "サービス",
        title2: "提供サービス",
        description: "各種ウェブ開発・デザイン関連のサービスを提供しています"
    },
    services: [
        {
            number: '01',
            icon: 'bi bi-code-slash',
            title: 'フロントエンド開発',
            description: 'React、Next.js、TypeScriptを使用したモダンなウェブアプリケーションの開発。レスポンシブデザインと高パフォーマンスを重視します。',
        },
        {
            number: '02',
            icon: 'bi bi-server',
            title: 'バックエンド開発',
            description: 'Node.js、Express、MongoDB、FirebaseなどによるAPIおよびデータベース設計。スケーラブルなバックエンドシステムを構築します。',
        },
        {
            number: '03',
            icon: 'bi bi-palette',
            title: 'UIデザイン',
            description: 'Figmaを用いたモダンでユーザーフレンドリーなUIデザイン。使いやすさとビジュアルの美しさを両立したデザインを提供します。',
        },
        {
            number: '04',
            icon: 'bi bi-lightning',
            title: 'ウェブパフォーマンス最適化',
            description: '既存ウェブサイトの表示速度とユーザー体験の改善。SEOに配慮したパフォーマンス最適化を行います。',
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
        title: "経歴",
        title2: "学歴と職歴",
        description: "これまでの学歴と職務経験について紹介します"
    },
    education: [
        {
            date: '1994.04 - 1997.03',
            degree: '電子科',
            university: '@福島県立会津工業高等学校',
        },
        {
            date: '1997.04 - 1999.03',
            degree: 'デジタルデザイン学科',
            university: '@日本工学院専門学校',
        },
    ],
    experience: [
        {
            date: '2025.06 - 現在',
            degree: 'デジタル戦略 / プロダクトマネージャー',
            university: '@株式会社ジンズ',
        },
        {
            date: '2018.03 - 2024.12',
            degree: 'ECプロダクトマネージャー',
            university: '@株式会社ベイクルーズ',
        },
        {
            date: '2010.04 - 2017.12',
            degree: 'ECディレクター / UIUXリード',
            university: '@株式会社MOA（現エクスプライス株式会社）',
        },
        {
            date: '2006.03 - 2010.03',
            degree: 'WEBディレクター / UIデザイナー',
            university: '@株式会社童夢',
        },
        {
            date: '1999.04 - 2006.03',
            degree: 'デジタルデザイナー / DTPオペレーター',
            university: '@株式会社共栄コーポレーション',
        },
    ]
};


export const clientsData = {
    mainData: {
        title: "Clients",
        title2: "My Awesome Clients",
    },
    clients: [
        {
            lightLogo: Logo,
            darkLogo: Logo,
            url: '#',
        },
        {
            lightLogo: Logo,
            darkLogo: Logo,
            url: '#',
        },
        {
            lightLogo: Logo,
            darkLogo: Logo,
            url: '#',
        },
        {
            lightLogo: Logo,
            darkLogo: Logo,
            url: '#',
        },
        {
            lightLogo: Logo,
            darkLogo: Logo,
            url: '#',
        },
        {
            lightLogo: Logo,
            darkLogo: Logo,
            url: '#',
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
        title: "Clients",
        title2: "Get in touch",
        title3: "Let's Connect",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore",
        phone: "+976 12 34 9999",
        email: "flatheme@gmail.com",
        address: "121 King St, Melbourne VIC 3000",
    }
};

export const mapData = {
    mainData: {
        lat: -3.745,
        lng: -38.523,
    },
};