import React from "react";
import Modal from 'react-modal';

import "./App.css";
import { TreevizComponent } from "./TreevizReactComponent";

const femaleColour = "#ffb6b9"
const maleColour = "#8ac6d1"

var data = [
  { id: 1, text_1: "Jabra", text_2: "1799", father: null, color: maleColour },
  { id: 2, text_1: "Yossef", text_2: "1828", father: 1, color: maleColour },
  { id: 3, text_1: "Nasri", text_2: "1840", father: 1, color: maleColour },
  { id: 4, text_1: "Jergie", text_2: "1843", father: 1, color: maleColour },
  { id: 5, text_1: "Minouche", text_2: "1845", father: 1, color: femaleColour },
  { id: 6, text_1: "Susan Louisa", text_2: "1847", father: 1, color: femaleColour },
  { id: 7, text_1: "Warde", text_2: "1850", father: 1, color: femaleColour },
  { id: 8, text_1: "Neimatallah", text_2: "1855", father: 1, color: maleColour },
  { id: 9, text_1: "Philomina", text_2: "1856", father: 1, color: femaleColour },
  { id: 10, text_1: "Farida", text_2: "1856", father: 2, color: femaleColour },
  { id: 11, text_1: "Jergie Ephrem", text_2: "1858", father: 2, color: maleColour },
  { id: 12, text_1: "Louisa", text_2: "1859", father: 2, color: femaleColour },
  { id: 13, text_1: "Jergie Abdel Messih", text_2: "1862", father: 2, color: maleColour },
  { id: 14, text_1: "Warde", text_2: "1864", father: 2, color: femaleColour },
  { id: 15, text_1: "Jibrail", text_2: "1869", father: 2, color: maleColour },
  { id: 16, text_1: "Elias Mitri", text_2: "1871", father: 2, color: maleColour },
  { id: 17, text_1: "Mikhail", text_2: "1874", father: 2, color: maleColour },
  { id: 18, text_1: "Wadia", text_2: "1877", father: 2, color: femaleColour },
  { id: 77, text_1: "Rouphel", text_2: "1879", father: 2, color: maleColour },
  { id: 19, text_1: "Bassil", text_2: "1884", father: 2, color: maleColour },
  { id: 20, text_1: "Iskandar", text_2: "1884", father: 2, color: maleColour },
  { id: 21, text_1: "Youssef", text_2: "1888", father: 13, color: maleColour },
  { id: 22, text_1: "Helena", text_2: "1889", father: 13, color: femaleColour },
  { id: 23, text_1: "Afifa", text_2: "1890", father: 13, color: femaleColour },
  { id: 24, text_1: "Miriam", text_2: "1893", father: 13, color: femaleColour },
  { id: 25, text_1: "Naim Elias", text_2: "1895", father: 13, color: maleColour },
  { id: 26, text_1: "Antoin Karim", text_2: "1898", father: 13, color: maleColour },
  { id: 27, text_1: "Sobhi Zaki", text_2: "1902", father: 13, color: maleColour },
  { id: 28, text_1: "Karim", text_2: "1904", father: 13, color: maleColour },
  { id: 29, text_1: "Tewfik Lotfi", text_2: "1910", father: 13, color: maleColour },
  { id: 30, text_1: "Virginie", text_2: "1918", father: 25, color: femaleColour },
  { id: 31, text_1: "Marie", text_2: "1920", father: 25, color: femaleColour },
  { id: 32, text_1: "George", text_2: "1923", father: 25, color: maleColour },
  { id: 33, text_1: "Georgette", text_2: "1927", father: 25, color: femaleColour },
  { id: 34, text_1: "Julia", text_2: "1929", father: 25, color: femaleColour },
  { id: 35, text_1: "Tewfik", text_2: "1929", father: 25, color: maleColour },
  { id: 36, text_1: "Rizk Allah Joussef", text_2: "1892", father: 15, color: maleColour },
  { id: 37, text_1: "Cathrina", text_2: "1894", father: 15, color: femaleColour },
  { id: 38, text_1: "Barbara", text_2: "1897", father: 15, color: femaleColour },
  { id: 39, text_1: "Kamel Ephrem", text_2: "1899", father: 15, color: maleColour },
  { id: 40, text_1: "Tewfik Nadim", text_2: "1903", father: 15, color: maleColour },
  { id: 41, text_1: "Gabrial", text_2: "1926", father: 36, color: maleColour },
  { id: 42, text_1: "Linda", text_2: "1927", father: 36, color: femaleColour },
  { id: 43, text_1: "Helena", text_2: "1892", father: 16, color: femaleColour },
  { id: 44, text_1: "Youssef Antoine", text_2: "1894", father: 16, color: maleColour },
  { id: 45, text_1: "Abdallah Gergi", text_2: "1898", father: 16, color: maleColour },
  { id: 46, text_1: "Kamel Louis", text_2: "1900", father: 16, color: maleColour },
  { id: 47, text_1: "Sayeda Labiba", text_2: "1902", father: 16, color: femaleColour },
  { id: 48, text_1: "Simone", text_2: "1922", father: 44, color: femaleColour },
  { id: 49, text_1: "Elias", text_2: "1924", father: 44, color: maleColour },
  { id: 50, text_1: "Raymond", text_2: "1925", father: 44, color: maleColour },
  { id: 51, text_1: "Eddy", text_2: "1937", father: 44, color: maleColour },
  { id: 52, text_1: "Antoinette", text_2: "1922", father: 46, color: femaleColour },
  { id: 53, text_1: "Laurice", text_2: "1925", father: 46, color: femaleColour },
  { id: 54, text_1: "Henriette", text_2: "1927", father: 46, color: femaleColour },
  { id: 55, text_1: "Edmond", text_2: "1933", father: 46, color: maleColour },
  { id: 56, text_1: "Laurice", text_2: "1899", father: 17, color: femaleColour },
  { id: 57, text_1: "Youssef Jergi", text_2: "1904", father: 17, color: maleColour },
  { id: 58, text_1: "Leonie", text_2: "1906", father: 17, color: femaleColour },
  { id: 59, text_1: "Yorki Semaan", text_2: "1908", father: 17, color: maleColour },
  { id: 60, text_1: "Chafik Elias", text_2: "1910", father: 17, color: maleColour },
  { id: 61, text_1: "Leon Boulos", text_2: "1912", father: 17, color: maleColour },
  { id: 62, text_1: "Alice", text_2: "1915", father: 17, color: femaleColour },
  { id: 63, text_1: "Leona", text_2: "1917", father: 17, color: femaleColour },
  { id: 64, text_1: "Yolki", text_2: "1921", father: 17, color: maleColour },
  { id: 65, text_1: "Mikhail", text_2: "1940", father: 57, color: maleColour },
  { id: 66, text_1: "Mona", text_2: "1943", father: 57, color: femaleColour },
  { id: 67, text_1: "Mounir", text_2: "1945", father: 57, color: maleColour },
  { id: 68, text_1: "Moufid", text_2: "1946", father: 57, color: maleColour },
  { id: 69, text_1: "Colette", text_2: "1927", father: 61, color: femaleColour },
  { id: 70, text_1: "Jean Rene", text_2: "1929", father: 61, color: maleColour },
  { id: 71, text_1: "Elias", text_2: "1925", father: 45, color: maleColour },
  { id: 72, text_1: "Joseph", text_2: "1927", father: 45, color: maleColour },
  { id: 73, text_1: "Mikhail", text_2: "1938", father: 60, color: maleColour },
  { id: 74, text_1: "Antoine", text_2: "1940", father: 60, color: maleColour },
  { id: 75, text_1: "Joseph", text_2: "1944", father: 60, color: maleColour },
  { id: 76, text_1: "Marie Therese", text_2: "1946", father: 60, color: femaleColour },
  { id: 78, text_1: "Abdullah Youssef", text_2: "1904", father: 77, color: maleColour },
  { id: 79, text_1: "Elias", text_2: "1912", father: 77, color: maleColour },
  { id: 80, text_1: "Antoine", text_2: "1914", father: 77, color: maleColour },
  { id: 81, text_1: "George", text_2: "1915", father: 77, color: maleColour },
  { id: 82, text_1: "Marie", text_2: "1918", father: 77, color: femaleColour },
  { id: 83, text_1: "Laurice", text_2: "1933", father: 78, color: femaleColour },
  { id: 84, text_1: "Raffoul", text_2: "1935", father: 78, color: maleColour },
  { id: 85, text_1: "Therese", text_2: "1939", father: 78, color: femaleColour },
  { id: 86, text_1: "Raffoul", text_2: "1945", father: 81, color: maleColour },
  { id: 87, text_1: "Joseph", text_2: "1948", father: 81, color: maleColour },
  { id: 88, text_1: "Nadia", text_2: "1950", father: 81, color: femaleColour },
  { id: 89, text_1: "Josephine", text_2: "1903", father: 19, color: femaleColour },
  { id: 90, text_1: "Youssef", text_2: "1907", father: 19, color: maleColour },
  { id: 91, text_1: "Margot", text_2: "1909", father: 19, color: femaleColour },
  { id: 92, text_1: "Margaret", text_2: "1912", father: 19, color: femaleColour },
  { id: 93, text_1: "Antoinette", text_2: "1914", father: 19, color: femaleColour },
  { id: 94, text_1: "Antoine", text_2: "1916", father: 19, color: maleColour },
  { id: 95, text_1: "Nadine Gergis", text_2: "1919", father: 19, color: maleColour },
  { id: 96, text_1: "Janette", text_2: "1924", father: 19, color: femaleColour },
  { id: 97, text_1: "Grace", text_2: "1941", father: 90, color: femaleColour },
  { id: 98, text_1: "Bassil", text_2: "1943", father: 90, color: maleColour },
  { id: 99, text_1: "Iskandar", text_2: "1945", father: 90, color: maleColour },
  { id: 100, text_1: "Dominique", text_2: "1962", father: 84, color: femaleColour },
  { id: 101, text_1: "Marianne", text_2: "1964", father: 84, color: femaleColour },
  { id: 102, text_1: "Michele", text_2: "1964", father: 84, color: femaleColour },
  { id: 103, text_1: "Joseph", text_2: "1971", father: 84, color: maleColour },
  { id: 104, text_1: "Sebastien", text_2: "1998", father: 103, color: maleColour },
  { id: 105, text_1: "Patrick", text_2: "1999", father: 103, color: maleColour },
  { id: 106, text_1: "Chrystal", text_2: "1994", father: 102, color: femaleColour },
  { id: 107, text_1: "Arthur", text_2: "1996", father: 102, color: maleColour },
  { id: 108, text_1: "Jesse", text_2: "1991", father: 101, color: maleColour },
  { id: 109, text_1: "Raya", text_2: "1993", father: 100, color: femaleColour },
  { id: 110, text_1: "Eliane", text_2: "1994", father: 100, color: femaleColour },





]

var data_english = [
  { id: 1, text_1: "Jabra", text_2: "1799", father: null, color: maleColour },
  { id: 2, text_1: "Joseph", text_2: "1828", father: 1, color: maleColour },
  { id: 3, text_1: "Nasri", text_2: "1840", father: 1, color: maleColour },
  { id: 4, text_1: "George", text_2: "1843", father: 1, color: maleColour },
  { id: 5, text_1: "Minouche", text_2: "1845", father: 1, color: femaleColour },
  { id: 6, text_1: "Susan Louisa", text_2: "1847", father: 1, color: femaleColour },
  { id: 7, text_1: "Warde", text_2: "1850", father: 1, color: femaleColour },
  { id: 8, text_1: "Neimatallah", text_2: "1855", father: 1, color: maleColour },
  { id: 9, text_1: "Philomina", text_2: "1856", father: 1, color: femaleColour },
  { id: 10, text_1: "Farida", text_2: "1856", father: 2, color: femaleColour },
  { id: 11, text_1: "George Ephrem", text_2: "1858", father: 2, color: maleColour },
  { id: 12, text_1: "Louisa", text_2: "1859", father: 2, color: femaleColour },
  { id: 13, text_1: "George Abdel Messih", text_2: "1862", father: 2, color: maleColour },
  { id: 14, text_1: "Warde", text_2: "1864", father: 2, color: femaleColour },
  { id: 15, text_1: "Gabriel", text_2: "1869", father: 2, color: maleColour },
  { id: 16, text_1: "Elias Mitri", text_2: "1871", father: 2, color: maleColour },
  { id: 17, text_1: "Michael", text_2: "1874", father: 2, color: maleColour },
  { id: 18, text_1: "Wadia", text_2: "1877", father: 2, color: femaleColour },
  { id: 77, text_1: "Raphael", text_2: "1879", father: 2, color: maleColour },
  { id: 19, text_1: "Bassil", text_2: "1884", father: 2, color: maleColour },
  { id: 20, text_1: "Alexander", text_2: "1884", father: 2, color: maleColour },
  { id: 21, text_1: "Joseph", text_2: "1888", father: 13, color: maleColour },
  { id: 22, text_1: "Helen", text_2: "1889", father: 13, color: femaleColour },
  { id: 23, text_1: "Afifa", text_2: "1890", father: 13, color: femaleColour },
  { id: 24, text_1: "Mary", text_2: "1893", father: 13, color: femaleColour },
  { id: 25, text_1: "Naim Elias", text_2: "1895", father: 13, color: maleColour },
  { id: 26, text_1: "Anthony Karim", text_2: "1898", father: 13, color: maleColour },
  { id: 27, text_1: "Sobhi Zaki", text_2: "1902", father: 13, color: maleColour },
  { id: 28, text_1: "Karim", text_2: "1904", father: 13, color: maleColour },
  { id: 29, text_1: "Tewfik Lotfi", text_2: "1910", father: 13, color: maleColour },
  { id: 30, text_1: "Virgina", text_2: "1918", father: 25, color: femaleColour },
  { id: 31, text_1: "Mary", text_2: "1920", father: 25, color: femaleColour },
  { id: 32, text_1: "George", text_2: "1923", father: 25, color: maleColour },
  { id: 33, text_1: "Georgette", text_2: "1927", father: 25, color: femaleColour },
  { id: 34, text_1: "Julia", text_2: "1929", father: 25, color: femaleColour },
  { id: 35, text_1: "Tewfik", text_2: "1929", father: 25, color: maleColour },
  { id: 36, text_1: "Rizk Allah Joussef", text_2: "1892", father: 15, color: maleColour },
  { id: 37, text_1: "Catherine", text_2: "1894", father: 15, color: femaleColour },
  { id: 38, text_1: "Barbara", text_2: "1897", father: 15, color: femaleColour },
  { id: 39, text_1: "Kamel Ephrem", text_2: "1899", father: 15, color: maleColour },
  { id: 40, text_1: "Tewfik Nadim", text_2: "1903", father: 15, color: maleColour },
  { id: 41, text_1: "Gabriel", text_2: "1926", father: 36, color: maleColour },
  { id: 42, text_1: "Linda", text_2: "1927", father: 36, color: femaleColour },
  { id: 43, text_1: "Helen", text_2: "1892", father: 16, color: femaleColour },
  { id: 44, text_1: "Joseph Antoine", text_2: "1894", father: 16, color: maleColour },
  { id: 45, text_1: "Abdallah Gergi", text_2: "1898", father: 16, color: maleColour },
  { id: 46, text_1: "Kamel Louis", text_2: "1900", father: 16, color: maleColour },
  { id: 47, text_1: "Sayeda Labiba", text_2: "1902", father: 16, color: femaleColour },
  { id: 48, text_1: "Simone", text_2: "1922", father: 44, color: femaleColour },
  { id: 49, text_1: "Elias", text_2: "1924", father: 44, color: maleColour },
  { id: 50, text_1: "Raymond", text_2: "1925", father: 44, color: maleColour },
  { id: 51, text_1: "Eddy", text_2: "1937", father: 44, color: maleColour },
  { id: 52, text_1: "Antoinette", text_2: "1922", father: 46, color: femaleColour },
  { id: 53, text_1: "Laurice", text_2: "1925", father: 46, color: femaleColour },
  { id: 54, text_1: "Henriette", text_2: "1927", father: 46, color: femaleColour },
  { id: 55, text_1: "Edmond", text_2: "1933", father: 46, color: maleColour },
  { id: 56, text_1: "Laurice", text_2: "1899", father: 17, color: femaleColour },
  { id: 57, text_1: "Joseph Jergi", text_2: "1904", father: 17, color: maleColour },
  { id: 58, text_1: "Leonie", text_2: "1906", father: 17, color: femaleColour },
  { id: 59, text_1: "George Semaan", text_2: "1908", father: 17, color: maleColour },
  { id: 60, text_1: "Chafik Elias", text_2: "1910", father: 17, color: maleColour },
  { id: 61, text_1: "Leon Boulos", text_2: "1912", father: 17, color: maleColour },
  { id: 62, text_1: "Alice", text_2: "1915", father: 17, color: femaleColour },
  { id: 63, text_1: "Leona", text_2: "1917", father: 17, color: femaleColour },
  { id: 64, text_1: "George", text_2: "1921", father: 17, color: maleColour },
  { id: 65, text_1: "Michael", text_2: "1940", father: 57, color: maleColour },
  { id: 66, text_1: "Mona", text_2: "1943", father: 57, color: femaleColour },
  { id: 67, text_1: "Mounir", text_2: "1945", father: 57, color: maleColour },
  { id: 68, text_1: "Moufid", text_2: "1946", father: 57, color: maleColour },
  { id: 69, text_1: "Colette", text_2: "1927", father: 61, color: femaleColour },
  { id: 70, text_1: "Jean Rene", text_2: "1929", father: 61, color: maleColour },
  { id: 71, text_1: "Elias", text_2: "1925", father: 45, color: maleColour },
  { id: 72, text_1: "Joseph", text_2: "1927", father: 45, color: maleColour },
  { id: 73, text_1: "Michael", text_2: "1938", father: 60, color: maleColour },
  { id: 74, text_1: "Anthony", text_2: "1940", father: 60, color: maleColour },
  { id: 75, text_1: "Joseph", text_2: "1944", father: 60, color: maleColour },
  { id: 76, text_1: "Mary Thesresa", text_2: "1946", father: 60, color: femaleColour },
  { id: 78, text_1: "Abdullah Joseph", text_2: "1904", father: 77, color: maleColour },
  { id: 79, text_1: "Elias", text_2: "1912", father: 77, color: maleColour },
  { id: 80, text_1: "Anthony", text_2: "1914", father: 77, color: maleColour },
  { id: 81, text_1: "George", text_2: "1915", father: 77, color: maleColour },
  { id: 82, text_1: "Mary", text_2: "1918", father: 77, color: femaleColour },
  { id: 83, text_1: "Laurice", text_2: "1933", father: 78, color: femaleColour },
  { id: 84, text_1: "Raphael", text_2: "1935", father: 78, color: maleColour },
  { id: 85, text_1: "Theresa", text_2: "1939", father: 78, color: femaleColour },
  { id: 86, text_1: "Raphael", text_2: "1945", father: 81, color: maleColour },
  { id: 87, text_1: "Joseph", text_2: "1948", father: 81, color: maleColour },
  { id: 88, text_1: "Nadia", text_2: "1950", father: 81, color: femaleColour },
  { id: 89, text_1: "Josephine", text_2: "1903", father: 19, color: femaleColour },
  { id: 90, text_1: "Joseph", text_2: "1907", father: 19, color: maleColour },
  { id: 91, text_1: "Margot", text_2: "1909", father: 19, color: femaleColour },
  { id: 92, text_1: "Margaret", text_2: "1912", father: 19, color: femaleColour },
  { id: 93, text_1: "Antoinette", text_2: "1914", father: 19, color: femaleColour },
  { id: 94, text_1: "Anthony", text_2: "1916", father: 19, color: maleColour },
  { id: 95, text_1: "Nadine George", text_2: "1919", father: 19, color: maleColour },
  { id: 96, text_1: "Janette", text_2: "1924", father: 19, color: femaleColour },
  { id: 97, text_1: "Grace", text_2: "1941", father: 90, color: femaleColour },
  { id: 98, text_1: "Bassil", text_2: "1943", father: 90, color: maleColour },
  { id: 99, text_1: "Alexander", text_2: "1945", father: 90, color: maleColour },
  { id: 100, text_1: "Dominique", text_2: "1962", father: 84, color: femaleColour },
  { id: 101, text_1: "Marianne", text_2: "1964", father: 84, color: femaleColour },
  { id: 102, text_1: "Michele", text_2: "1964", father: 84, color: femaleColour },
  { id: 103, text_1: "Joseph", text_2: "1971", father: 84, color: maleColour },
  { id: 104, text_1: "Sebastien", text_2: "1998", father: 103, color: maleColour },
  { id: 105, text_1: "Patrick", text_2: "1999", father: 103, color: maleColour },
  { id: 106, text_1: "Chrystal", text_2: "1994", father: 102, color: femaleColour },
  { id: 107, text_1: "Arthur", text_2: "1996", father: 102, color: maleColour },
  { id: 108, text_1: "Jesse", text_2: "1991", father: 101, color: maleColour },
  { id: 109, text_1: "Raya", text_2: "1993", father: 100, color: femaleColour },
  { id: 110, text_1: "Eliane", text_2: "1994", father: 100, color: femaleColour },
]

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      dataSelected: true,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setDataSelected = this.setDataSelected.bind(this);

  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#222222';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  setDataSelected() {
    this.setState({ dataSelected: !this.state.dataSelected })
  }

  render() {
    return (
      <div className="App">
        <div className="menu">
        <button onClick={this.setDataSelected} className="menu--item">{this.state.dataSelected ? <i data-emoji="🇬🇧"></i> : <i data-emoji="🇸🇾"></i>}</button>
        <button onClick={this.openModal} className="menu--item menu--item--about">?</button>
        </div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          // style={customStyles}
          contentLabel="About Modal"
          className="modal">

          <h2 ref={subtitle => this.subtitle = subtitle}>The Bailouni Family Tree</h2>
          <button onClick={this.closeModal} className="modal--close">X</button>
          <div className="modal--content">
            This is the Genealogical Tree of the Bailouni Family of Aleppo, Syria.
            The names and dates were taken from the registers of the Syrian Catholic Church. <br></br>
            <br></br>
            The original tree was created by Tewfik Lotfi (Father Phillipe), son of Jergie Abdel Messih, son of Youssef, son of Jabra Bailouni.<br></br>
            <br></br>
            It was translated from Arabic into English by Raphael Bailouni and this website was created by <a href="https://seb.bailouni.com" target="_blank" rel="noopener noreferrer">Sebastien Bailouni</a>.
          </div>
        </Modal>
        {/* <button onClick={() => setDataSelected(!dataSelected)} style={{position: 'fixed'}}>Toggle data</button> */}
        <TreevizComponent
          data={this.state.dataSelected ? data : data_english}
        // setNodeHovered={setNodeHovered}
        />
      </div>
    );
  }
}

export default App;
