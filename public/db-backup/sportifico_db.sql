-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 21, 2023 at 02:41 PM
-- Server version: 10.3.39-MariaDB
-- PHP Version: 8.1.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sportifico_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_configs`
--

CREATE TABLE `admin_configs` (
  `id` int(11) UNSIGNED NOT NULL,
  `config_key` varchar(40) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `config_value` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `value_unit` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` enum('a','i') NOT NULL DEFAULT 'a',
  `created_date` datetime NOT NULL DEFAULT current_timestamp(),
  `modified_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `admin_configs`
--

INSERT INTO `admin_configs` (`id`, `config_key`, `config_value`, `value_unit`, `status`, `created_date`, `modified_date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'globalApiPassword', 'eyJpdiI6IndYd2hkNkJBWGF1OStmRUc4bnllbUE9PSIsInZhbHVlIjoiYk5jdUh1a1lxZTFqK0RPTUxVcnU1UT09IiwibWFjIjoiNGQ5MmVmNjNiOTRjNzkxYjc2MGVkZDRhMWExOTFkOGZmMTE3OWFlZDkxODYyZjk2NDQzOGZhNGZiODcyYWZjNCJ9', 'text', 'a', '2017-04-06 03:22:12', '2021-07-19 07:55:12', NULL, '2020-01-24 12:24:34', NULL),
(2, 'from_emails', 'teamftestemail@gmail.com', 'one', 'a', '2018-05-22 08:55:43', '2020-12-30 13:49:47', NULL, '2020-12-30 13:49:47', NULL),
(3, 'to_emails', 'businessapp@mailinator.com', 'one', 'a', '2018-08-03 13:55:38', '2020-12-30 13:49:47', '2018-08-03 00:00:00', '2020-12-30 13:49:47', NULL),
(4, 'date_format', 'Y/m/d', 'date', 'a', '2018-08-03 13:55:38', '2020-12-30 13:49:47', '2018-08-03 00:00:00', '2020-12-30 13:49:47', NULL),
(5, 'time_format', 'h:i A', 'time', 'a', '2019-02-06 00:00:00', '2020-12-30 13:49:47', '2019-02-06 00:00:00', '2020-12-30 13:49:47', NULL),
(6, 'pagination_limit', '20', 'text', 'a', '2019-12-20 00:00:00', '2020-12-30 13:49:47', '2019-12-20 00:00:00', '2020-12-30 13:49:47', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `image` text DEFAULT NULL,
  `icon` text DEFAULT NULL,
  `status` enum('a','i') NOT NULL DEFAULT 'a',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` text DEFAULT NULL,
  `slug` varchar(255) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT 0,
  `status` enum('a','i') NOT NULL DEFAULT 'a',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `image_validations`
--

CREATE TABLE `image_validations` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `entity` enum('banner','logo','social-media-icon','news','notice') NOT NULL DEFAULT 'logo',
  `width` int(11) NOT NULL COMMENT 'in pixel',
  `height` int(11) NOT NULL COMMENT 'in pixel',
  `size` int(11) NOT NULL COMMENT 'in bytes (1 mb = 1024 kb = 1048576 byte) ',
  `status` enum('a','i') NOT NULL DEFAULT 'a',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `image_validations`
--

INSERT INTO `image_validations` (`id`, `title`, `entity`, `width`, `height`, `size`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Banner Validation', 'banner', 1920, 1080, 5242880, 'a', '2021-10-21 19:24:59', '2021-10-21 19:41:11', NULL),
(2, 'Logo Validation', 'logo', 250, 250, 2097152, 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(3, 'Social Media Icon Validation', 'social-media-icon', 100, 100, 2097152, 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(4, 'News Image Validation', 'news', 1920, 1080, 5242880, 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL),
(5, 'Notice Image Validation', 'notice', 1920, 1080, 5242880, 'a', '0000-00-00 00:00:00', '0000-00-00 00:00:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `logos`
--

CREATE TABLE `logos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` text DEFAULT NULL,
  `type` enum('fw','aw','fm','am') NOT NULL DEFAULT 'fw' COMMENT 'fw = front web;\r\nfm = front mobile;\r\naw = admin web;\r\nam = admin mobile',
  `status` enum('a','i') NOT NULL DEFAULT 'a',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `logos`
--

INSERT INTO `logos` (`id`, `title`, `image`, `type`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Admin Logo', 'l-logo-1686125359-1.png', 'aw', 'a', '2023-06-02 22:52:30', '2023-06-07 08:09:19', NULL),
(2, 'Front Logo', 'l-twitter2x-1685746394-2.png', 'fw', 'a', '2023-06-02 22:53:14', '2023-06-02 22:53:14', NULL),
(3, 'ADS', 'l-71rixgfa5kl-1686307519-3.jpg', 'fw', 'a', '2023-06-09 10:44:43', '2023-06-09 11:10:03', '2023-06-09 11:10:03');

-- --------------------------------------------------------

--
-- Table structure for table `social_media_icons`
--

CREATE TABLE `social_media_icons` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `url` text DEFAULT NULL,
  `image` text NOT NULL,
  `status` enum('a','i') NOT NULL DEFAULT 'a',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `social_media_icons`
--

INSERT INTO `social_media_icons` (`id`, `title`, `url`, `image`, `status`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Facebook Icon', 'https://facebook.com', 's-fb2-1635314363-1.png', 'a', '2021-10-27 08:58:51', '2021-10-27 08:59:23', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tags`
--

CREATE TABLE `tags` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `status` enum('a','i') NOT NULL DEFAULT 'a',
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `fname` varchar(255) NOT NULL DEFAULT '',
  `lname` varchar(255) NOT NULL DEFAULT '',
  `phone_code` varchar(255) NOT NULL DEFAULT '+966',
  `mobile` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `image` longtext DEFAULT NULL,
  `password` text CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `timezone` varchar(255) DEFAULT NULL COMMENT 'user timezone',
  `dob` datetime DEFAULT NULL,
  `email_activation_code` varchar(50) DEFAULT NULL,
  `password_reset_code` varchar(50) DEFAULT NULL,
  `type` enum('s','a','r') NOT NULL DEFAULT 'r' COMMENT '''s''=>Superadmin, ''a''=>admin,''r''=>regular user',
  `registration_type` enum('n','f','g','a') NOT NULL DEFAULT 'n' COMMENT 'n => normal, f => facebook connect, g => googleplus connect, a => azure login',
  `status` enum('a','i') NOT NULL DEFAULT 'i' COMMENT 'a => active, i => inactive',
  `is_login` enum('y','n') NOT NULL DEFAULT 'n' COMMENT 'y => yes logged in, n => no, not logged in',
  `email_verified` enum('y','n') NOT NULL DEFAULT 'n' COMMENT 'y => yes email verified, n => no email not verified',
  `mobile_verified` enum('y','n') NOT NULL DEFAULT 'n' COMMENT 'y => yes mobile verified, n => no mobile not verified',
  `is_ban` enum('y','n') NOT NULL DEFAULT 'n' COMMENT 'y => yes user banned, n => no user not banned',
  `remember_token` text DEFAULT NULL,
  `guid` varchar(50) DEFAULT NULL,
  `device_type` enum('a','i','w') DEFAULT NULL,
  `device_id` varchar(255) DEFAULT NULL,
  `last_login` datetime DEFAULT NULL,
  `created_date` datetime NOT NULL,
  `modified_date` datetime NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `fname`, `lname`, `phone_code`, `mobile`, `email`, `username`, `image`, `password`, `timezone`, `dob`, `email_activation_code`, `password_reset_code`, `type`, `registration_type`, `status`, `is_login`, `email_verified`, `mobile_verified`, `is_ban`, `remember_token`, `guid`, `device_type`, `device_id`, `last_login`, `created_date`, `modified_date`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'LPPN', 'Admin', '+966', 'lpp@mailinator.com', 'lpp.portal@mailinator.com', 'lpp', 'u-blonde-1686307157-1.jpg', '$2y$10$g0gj6pQFuutxvHhb8REryeMuoJ1tRNYx5SEbi4Qd1/uCzuZfeu3Ru', NULL, NULL, '', NULL, 's', 'n', 'a', '', 'y', 'y', 'n', '7F7WTmcPLi0cdByQD4gAo0Tk9PKa3F9GEefh84wPKogD8LBe9bbHtaTXjOYW', '', NULL, NULL, NULL, '2021-01-01 16:15:38', '2021-01-01 16:15:50', '2021-01-01 00:00:00', '2023-06-10 15:24:29', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_configs`
--
ALTER TABLE `admin_configs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `banners`
--
ALTER TABLE `banners`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image_validations`
--
ALTER TABLE `image_validations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logos`
--
ALTER TABLE `logos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social_media_icons`
--
ALTER TABLE `social_media_icons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tags`
--
ALTER TABLE `tags`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_configs`
--
ALTER TABLE `admin_configs`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `banners`
--
ALTER TABLE `banners`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `image_validations`
--
ALTER TABLE `image_validations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `logos`
--
ALTER TABLE `logos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `social_media_icons`
--
ALTER TABLE `social_media_icons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tags`
--
ALTER TABLE `tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
