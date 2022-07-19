import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Popover, Avatar, List, Comment, } from 'antd';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined, HeartTwoTone, } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import FollowButton from './FollowButton';
import PostImages from './PostImages';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import { REMOVE_POST_REQUEST } from '../reducers/post';


const PostCard = ({ post }) => {
    const dispatch = useDispatch();
    const { removePostLoading } = useSelector((state) => state.post);
    const [liked, setLiked] = useState(false);
    const [commentFormOpend, setCommentFormOpend] = useState(false);
    const onToggleLike = useCallback(() => {
        setLiked((prev) => !prev);
    }, []);

    const onRemovePost = useCallback(() => {
        dispatch({
            type: REMOVE_POST_REQUEST,
            data: post.id,
        });
    }, []);


    const onToggleComment = useCallback(() => {
        setCommentFormOpend((prev) => !prev);
    }, []);
    const { me } = useSelector((state) => state.user);
    const id = me?.id // 옵셔널 체인지 me && me.id; 
    return (
        <div style={{ marginBottom: 20 }}>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <RetweetOutlined key="retweet" />,
                    liked
                        ? <HeartTwoTone twoToneColor="red" key="heart" onClick={onToggleLike} />
                        : <HeartOutlined key="heart" onClick={onToggleLike} />,
                    <MessageOutlined key="comment" onClick={onToggleComment} />,
                    <Popover key="more" content={(
                        <Button.Group>
                            {id && post.User.id === id
                                ? (
                                    <div>
                                        <Button>수정</Button>
                                        <Button type='danger' loading={removePostLoading} onClick={onRemovePost}>삭제</Button>
                                    </div>
                                ) :
                                <Button>신고</Button>}
                        </Button.Group>
                    )}>
                        <EllipsisOutlined />
                    </Popover>,
                ]}
                extra={id && <FollowButton post={post} />}
            >
                <Card.Meta
                    avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                    title={post.User.nickname}
                    description={<PostCardContent postData={post.content} />}
                />
            </Card>
            {commentFormOpend && (
                <div>
                    <CommentForm post={post} />
                    <List
                        header={`${post.Comments.length}개의 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments}
                        renderItem={(item) => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </div>
            )}
        </div>
    )
};

PostCard.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        User: PropTypes.object,
        content: PropTypes.string,
        createAt: PropTypes.object,
        Comments: PropTypes.arrayOf(PropTypes.object),
        Images: PropTypes.arrayOf(PropTypes.object),
    }).isRequired,
};

export default PostCard