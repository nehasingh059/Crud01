-- phpMyAdmin SQL
-- version 4.0.9
-- http://www.phpmyadmin.net

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

-- Database: `data1`

CREATE TABLE IF NOT EXISTS `item` (
  `name` varchar(200) NOT NULL,
  `Approve` varchar(20) NOT NULL,
  `Reject` varchar(20) NOT NULL,
  
)

INSERT INTO `item` (`name`, `approve`, `reject`) VALUES
('Node.js', 'Approve', 'Reject'),
('Photosopcc', 'Approve', 'Reject'),
('Php', 'Approve', 'Reject'),
('MS office', 'Approve', 'Reject'),
('Github', 'Approve', 'Reject'),
('Sketch', 'Approve', 'Reject'),
('Invision', 'Approve', 'Reject'),


