ALTER table users
	MODIFY last_visit datetime null default null,
	MODIFY logout datetime null default null,
    MODIFY last_activity datetime null default null,
    MODIFY last_entry_date datetime null default null,
    MODIFY last_rating_date datetime null default null,
    MODIFY last_comment_date datetime null default null,
    MODIFY last_sent_daily_digest datetime null default null;