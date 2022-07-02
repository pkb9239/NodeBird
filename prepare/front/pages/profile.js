import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followerList = [ {nickname: '박경빈'}, {nickname: '바보'}, {nickname: '노드버드'}];
    const followeingList = [ {nickname: '박경빈'}, {nickname: '바보'}, {nickname: '노드버드'}];

    return (
        <div>
            <Head>
                <title>내 프로필 | 부동산</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followeingList}/>
                <FollowList header="팔로워 목록" data={followerList}/> 
            </AppLayout>
        </div>

    );
}

export default Profile;