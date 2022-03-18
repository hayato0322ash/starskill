<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.osdn.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'starskill' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'root' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', 'root' );

/** MySQL のホスト名 */
define( 'DB_HOST', 'localhost' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8mb4' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'mr+H1/xE!aq?H,+Kk|O3Tb81*cO^svcoi?.ul6`dk#2oL_6mT:H7E+of*o?d1f[j' );
define( 'SECURE_AUTH_KEY',  '^W>uqOrGY|.$Q$IpLge}[<GlrSglq>r1K}1vL2Y;0,@hCK6.hrgR<]n*X0UW6[] ' );
define( 'LOGGED_IN_KEY',    'zeL:5/4(yc{^ql$GEw!jQD6gW%JyrU]3N4^_C}a)JyIS:D^y%8/]RF$Wm=O.z(|c' );
define( 'NONCE_KEY',        'DOlb8}90OzLAj?kH1Ys-@yI<JKANK)v=_0,gJ))#i^6r6SG$zaxC@!2k+k21%1mq' );
define( 'AUTH_SALT',        '&{+9|*VAT@y>@Qa;$ut9+$S0mHT/`D)^iQ(A^/_LOdIC&Y!zCi5o64K+7oq3lpM<' );
define( 'SECURE_AUTH_SALT', 'kb:x7TR#<H0PUbvb.`Oyp6|7G!`m0m^zJzoei~uk-U:9=mRoA%c3Vip|)@9[WTF-' );
define( 'LOGGED_IN_SALT',   '5*qu_];rA;d8zK,8%-p[S!>e%]YANn{v{LaaR4yPE^UCypQL`Yd8-3LM__@8/_cY' );
define( 'NONCE_SALT',       'Fq{rt[hVS0c37WU0f.3[4qTcvBw$=brk{_xI/[[,%p5$TOc>?l<4v$E4>ZbAiN-4' );

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
update_option( 'siteurl', 'http://localhost:8888/starskill' );
update_option( 'home', 'http://localhost:8888/starskill' );