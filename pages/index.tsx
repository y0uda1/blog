import React from 'react'
import Layout from '../components/layout'

export default function Home(): JSX.Element {
    return (
        <Layout>
            <p className={'border-b-2 text-xl'}>経歴</p>
            <div className={'my-3 mx-5'}>
                <p>2019年10月〜(現在は休職中)：株式会社カカクコム</p>
                <p>2016年4月〜2019年9月：ナレッジスイート株式会社</p>
                <p>2011年4月〜2016年3月：横浜国立大学 理工学部</p>
            </div>

            <p className={'mt-2 border-b-2 text-xl'}>行った業務など</p>
            <div className={'my-3 mx-5'}>
                <ol className={'list-none list-inside'}>
                    <li>他システム連携のためのAPI開発・機能拡張</li>
                    <li>新人(新卒)指導・教育方針策定</li>
                    <li>人手で行っていた業務の自動化による効率化</li>
                    <li>データ集計と表示画面の新規作成</li>
                    <li>数人程度のチームのリーダ経験</li>
                </ol>
            </div>

            <p className={'mt-2 border-b-2 text-xl'}>スキル</p>
            <div className={'my-3 mx-5'}>
                <ol className={'list-disc list-inside'}>
                    <li>php : Symfonyを使用してのwebアプリケーション開発。</li>
                    <li>
                        javascript :
                        主にjQuery。最近はvueやreactなど。typescriptが気になっている。
                    </li>
                    <li>
                        mysql :
                        テーブル設計。あまり複雑でないクエリのチューニング。
                    </li>
                    <li>
                        ステークホルダーと連携をとりつつ業務を円滑に進めることが出来ます
                    </li>
                </ol>
            </div>

            <p className={'mt-2 border-b-2 text-xl'}>好きなこと</p>
            <div className={'my-3 mx-5'}>
                <ol className={'list-disc list-inside'}>
                    <li>
                        コーディング。特に既存コードの効率化。新規作成時に設計良く一発でベストなコードを書くのは苦手です。
                    </li>
                    <li>
                        頭を使う事。問題解決に関する事？パズルでも仕事でもetc...
                    </li>
                    <li>
                        出来なかった事が出来るようになる事が好きです。好きですが、最近はあまりチャレンジをしていません。
                    </li>
                    <li>
                        ゲーム。PC,PS5,PS4,switchなど。アクションRPGが特に好きです。時点で戦略ゲー?。すばせか新作発売が待ち遠しいです。
                    </li>
                    <li>
                        お酒。日本酒(甘口とか古酒とか香りが強いものが特に好き)&gt;&gt;ビール&gt;ウィスキー。
                        ウィスキーはほぼ飲まなくて美味しいものや飲み方がわからないので教えてください。
                    </li>
                </ol>
            </div>

            <p className={'mt-2 border-b-2 text-xl'}>嫌いなこと</p>
            <div className={'my-3 mx-5'}>
                <ol className={'list-disc list-inside'}>
                    <li>単調な作業などめんどくさいこと。</li>
                    <li>
                        自己評価で良かったところを見つける事が苦手です。大体悪いところばかり思い出して反省してしまうだけで終わってしまいます。
                    </li>
                </ol>
            </div>
        </Layout>
    )
}
