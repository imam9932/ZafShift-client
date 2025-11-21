import React from 'react';

const ReviewsCard = ({review}) => {
  const {userName,review:testimonial,user_photoURL}=review;
  return (
    <div className="max-w-sm p-6 bg-base-100 rounded-2xl shadow-md border border-base-300 my-5">
<div className="flex flex-col gap-4">
{/* Quote icon */}
<div className="text-primary text-3xl">❝</div>


{/* Text */}
<p className="text-base text-base-content/80 leading-relaxed">
 {testimonial}
</p>


<div className="divider my-1"></div>


{/* Profile */}
<div className="flex items-center gap-3">
<div className="avatar placeholder">
<div className="bg-primary text-neutral-content rounded-full w-10">
 <img src={user_photoURL} alt="" />
</div>
</div>
<div>
<h3 className="font-semibold text-secondary"> {userName}</h3>
<p className="text-sm text-base-content/60">Senior Product Designer</p>
</div>
</div>
</div>
</div>
  );
};

export default ReviewsCard;