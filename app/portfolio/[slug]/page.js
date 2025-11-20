import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolioData } from '@/lib/siteData';
import Navigation from '@/components/Navigation';

export async function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const project = portfolioData.projects.find(p => p.slug === params.slug);
  
  if (!project) {
    return {
      title: 'プロジェクトが見つかりません',
    };
  }
  
  return {
    title: `${project.projectTitle} | Portfolio`,
    description: project.description,
  };
}

export default function PortfolioDetail({ params }) {
  const project = portfolioData.projects.find(p => p.slug === params.slug);
  
  if (!project) {
    return (
      <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
        <Navigation />
        <div className="lg:w-3/4 space-y-6 pb-12">
          <div className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
            <h1 className="text-3xl font-poppins font-semibold mb-6 dark:text-white">プロジェクトが見つかりません</h1>
            <p className="mb-4 text-pColor dark:text-white/70">お探しのプロジェクトは存在しないか、削除された可能性があります。</p>
            <Link href="/" className="inline-block font-mono font-medium text-sm px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md transition ease-linear duration-100">
              ホームに戻る
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
      <Navigation />
      <div className="lg:w-3/4 space-y-6 pb-12">
        <div className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
          <Link href="/" className="inline-block font-mono font-medium text-sm mb-6 hover:underline dark:text-white">
            <i className="bi bi-arrow-left me-2"></i> 戻る
          </Link>

          <h1 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">{project.projectTitle}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="col-span-2">
              <p className="text-pColor dark:text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.categories.map((category, idx) => (
                  <span key={idx} className="inline-block px-3 py-1 bg-gray-100 dark:bg-black/30 text-sm rounded-full dark:text-white/80">{category.name}</span>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">在籍</h3>
                <p className="text-pColor dark:text-white/70">{project.client}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 dark:text-white">期間</h3>
                <p className="text-pColor dark:text-white/70">{project.duration}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-8 overflow-hidden rounded-lg">
              <Image 
                src={project.imagesLightbox.image} 
                alt={project.imagesLightbox.alt || project.projectTitle}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
            
            {false && project.images && project.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {project.images.map((img, idx) => (
                  <div key={idx} className="overflow-hidden rounded-lg">
                    <Image 
                      src={img.image} 
                      alt={img.alt || `${project.projectTitle} image ${idx+1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* ベイクルーズプロジェクト専用の追加情報 */}
          {params.slug === 'baycrews-app' && (
            <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
              <h2 className="text-2xl font-poppins font-semibold mb-6 dark:text-white">プロジェクト詳細</h2>
              
              <div className="mb-10">
                <h3 className="text-xl font-semibold mb-4 dark:text-white">
                  <i className="bi bi-graph-up-arrow me-2"></i>
                  実績データ
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mb-6">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">指標</th>
                        <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">WEB（月間平均）</th>
                        <th className="border border-gray-200 dark:border-gray-700 px-4 py-2 text-left">APP（月間平均）</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-medium">月間売上（受注ベース）</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">35.5億円</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">21億円</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-medium">セッション</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">2,100万</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">686万</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-medium">CVR</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">0.67%</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">1.2%</td>
                      </tr>
                      <tr className="bg-gray-50 dark:bg-gray-900">
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-medium">注文件数</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">17万4,500件</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">10万件</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2 font-medium">客単価</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">¥16,000</td>
                        <td className="border border-gray-200 dark:border-gray-700 px-4 py-2">¥17,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">
                    <i className="bi bi-lightning me-2"></i>
                    売上改善のための開発・デザイン施策
                  </h3>
                  <div className="space-y-3 text-pColor dark:text-white/70">
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">協調フィルタリングを使用したレコメンドエンジン導入</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">全文検索エンジンのリプレイス</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">商品詳細、トップ、一覧ページのUIリニューアル</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">置き配対応のための開発</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">アプリのフロントリニューアル</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">LINE ID連携、CRMシステム連携</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">マーケティングオートメーションツールのリプレイス</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">セールや予約キャンペーン等のクリエイティブディレクション</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">転売BOT除外ソリューションの導入</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">
                    <i className="bi bi-stars me-2"></i>
                    サービス改善施策
                  </h3>
                  <div className="space-y-3 text-pColor dark:text-white/70">
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">店頭在庫取り置きサービスの見直し</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">送料有料化対応</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">VIP向け特典のリッチ化</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">置き配対応</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">Webからアプリにスイッチを促すキャンペーン</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">レビュー促進キャンペーン</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">予約キャンペーン（飛行機の早割のような仕掛け）</p>
                    </div>
                    <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-3 py-1">
                      <p className="font-medium">アウトレット品取り扱い開始</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">値引きによるブランド価値毀損を防ぐため、奥行きのある在庫はアウトレットとして取り扱い</p>
                    </div>
                  </div>
                </div>
              </div>

              {project.techStack && (
                <div className="mt-6 mb-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-3 dark:text-white">技術スタック</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {project.techStack.map((tech, idx) => (
                      <div key={idx} className="flex items-center">
                        <i className={`${tech.icon} text-lg mr-3 text-gray-600 dark:text-gray-400`}></i>
                        <span className="text-black dark:text-white">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 mb-4">
                <h3 className="text-lg font-semibold mb-2 dark:text-white">成果ハイライト</h3>
                <p className="text-pColor dark:text-white/70 mb-3">
                  7年間のプロジェクトを通じて<span className="font-bold">アプリ経由売上を197億円</span>まで成長させ、Web to App戦略により広告費を24億円から16億円へ削減。年間8億円のコスト削減と利益率の大幅改善を実現しました。アプリのCVRはWebの<span className="font-bold">約2倍</span>となり、顧客体験と収益性の両立に成功しました。
                </p>
                
                <h4 className="font-medium text-base mb-2 dark:text-white">Web to App戦略の効果</h4>
                <p className="text-pColor dark:text-white/70 mb-3">
                  アメリカの先進企業で実績のあるWeb to App戦略を日本市場向けに最適化して実施。データ分析の結果、アプリユーザーはCVRが高く客単価も向上し、セッション数は少ないものの高いリピート率を示していました。
                </p>
                
                <div className="bg-white dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-600 mb-2">
                  <h4 className="font-medium text-base mb-1 dark:text-white">カスタマージャーニー最適化</h4>
                  <p className="text-pColor dark:text-white/70">
                    <i className="bi bi-1-circle-fill me-2 text-gray-400"></i>初回〜2回目の購入：WEBで広く集客
                  </p>
                  <p className="text-pColor dark:text-white/70">
                    <i className="bi bi-arrow-down me-2 text-gray-400"></i>アプリインストールを促進するインセンティブ提供
                  </p>
                  <p className="text-pColor dark:text-white/70">
                    <i className="bi bi-2-circle-fill me-2 text-gray-400"></i>アプリへの移行：専用特典やUX改善で顧客体験向上
                  </p>
                  <p className="text-pColor dark:text-white/70">
                    <i className="bi bi-arrow-down me-2 text-gray-400"></i>パーソナライズされたレコメンドと特典提供
                  </p>
                  <p className="text-pColor dark:text-white/70">
                    <i className="bi bi-3-circle-fill me-2 text-gray-400"></i>ロイヤルカスタマー育成：高LTV顧客の定着化
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-3 rounded border border-gray-200 dark:border-gray-600 mb-2">
                  <h4 className="font-medium text-base mb-1 dark:text-white">収益性の大幅改善</h4>
                  <div className="flex items-center mb-2">
                    <div className="w-16 h-16 flex items-center justify-center bg-gray-50 dark:bg-gray-800/50 rounded-full mr-3">
                      <i className="bi bi-currency-yen text-2xl text-gray-600 dark:text-gray-400"></i>
                    </div>
                    <div>
                      <p className="text-pColor dark:text-white/70">
                        広告費を<span className="font-bold line-through mr-1">24億円</span><span className="font-bold">16億円</span>へ削減
                      </p>
                      <p className="text-pColor dark:text-white/70">
                        年間<span className="font-bold">8億円</span>のコスト削減を実現
                      </p>
                    </div>
                  </div>
                  <p className="text-pColor dark:text-white/70">
                    Web to App戦略により、売上を維持しながら広告費を大幅に削減し、利益率の改善に貢献しました。アプリユーザーのLTV向上によって、効率的なマーケティング投資が可能になりました。
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            {/* 通常の参考リンクセクション（LIKES以外のプロジェクト用） */}
            {params.slug !== 'content-cms' && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 dark:text-white">参考リンク</h3>
                <div className="space-y-3">
                  {params.slug === 'baycrews-app' && (
                    <>
                      <div className="flex items-center">
                        <i className="bi bi-globe text-lg mr-3 text-gray-600 dark:text-gray-400"></i>
                        <a href="https://baycrews.jp/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white underline">
                          BAYCREW'S 公式サイト
                        </a>
                      </div>
                      <div className="flex items-center">
                        <i className="bi bi-app text-lg mr-3 text-gray-600 dark:text-gray-400"></i>
                        <a href="https://apps.apple.com/jp/app/baycrews-%E3%83%99%E3%82%A4%E3%82%AF%E3%83%AB%E3%83%BC%E3%82%BA/id762058079" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white underline">
                          BAYCREW'S アプリ (App Store)
                        </a>
                      </div>
                    </>
                  )}
                  {project.referenceUrl && params.slug !== 'content-cms' && (
                    <div className="flex items-center">
                      <i className="bi bi-globe text-lg mr-3 text-gray-600 dark:text-gray-400"></i>
                      <a href={project.referenceUrl} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white underline">
                        {project.projectTitle}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 主要機能セクション - LIKESプロジェクト用 */}
            {params.slug === 'content-cms' && project.features && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 dark:text-white">主要機能</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center p-2">
                      <i className="bi bi-check-circle text-lg mr-3 text-gray-600 dark:text-gray-400"></i>
                      <div>
                        <div className="text-black dark:text-white font-medium">{feature.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* キーワードと技術スタックセクション */}
            {params.slug === 'content-cms' && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 dark:text-white">キーワード</h3>
                <div className="flex flex-wrap gap-2">
                  {project.keywords.split(',').map((keyword, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-800 dark:text-gray-200 text-sm">{keyword.trim()}</span>
                  ))}
                </div>
              </div>
            )}

            {/* 技術スタックセクション - 全プロジェクト共通 */}
            {project.techStack && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 dark:text-white">技術スタック</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.techStack.map((tech, idx) => (
                    <div key={idx} className="flex items-center">
                      <i className={`${tech.icon} text-lg mr-3 text-gray-600 dark:text-gray-400`}></i>
                      <span className="text-black dark:text-white">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* LIKESプロジェクト用の参考リンク - 技術スタックの下に配置 */}
            {project.referenceUrl && params.slug === 'content-cms' && (
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-3 dark:text-white">参考リンク</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <i className="bi bi-globe text-lg mr-3 text-gray-600 dark:text-gray-400"></i>
                    <a href={project.referenceUrl} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white underline">
                      {project.projectTitle}
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 