const mongoose = require('mongoose');

const { Schema } = mongoose;

const Post = new Schema({
    title: String,
    body: String,
    tags: [String], // 문자열 배열
    publishedData: {
        type: Date,
        default: new Date() // 현재 날짜를 기본 값으로 지정
    }
});

// 모델 생성
module.exports = mongoose.model('Post', Post);