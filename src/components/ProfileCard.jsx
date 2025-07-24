import React from "react";
import "../styles/Form.css";

function ProfileCard({ title, avatar, fields, actions }) {
  return (
    <div className="user-profile-card-modern" style={{ maxWidth: 700, margin: '48px auto', padding: '48px 40px', fontSize: '1.15rem', minHeight: '520px' }}>
      <h2 className="profile-title">{title}</h2>
      <div className="profile-main-row" style={{ flexDirection: 'column', alignItems: 'center' }}>
        <div className="profile-avatar-block" style={{ marginBottom: '32px' }}>
          <div className="user-avatar-modern" style={{ fontSize: '3.2rem', width: 110, height: 110, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#e7edfa', borderRadius: '50%', boxShadow: '0 2px 12px #e0e7fa' }}>
            {avatar}
          </div>
        </div>
        <div className="profile-info-block">
          {fields.map((field, idx) => (
            <div className="profile-info-row" key={idx}>
              <div className="profile-info-label">{field.label}</div>
              <div className="profile-info-value">{field.value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="profile-actions-row" style={{ justifyContent: 'center', marginTop: '32px' }}>
        {actions}
      </div>
    </div>
  );
}

export default ProfileCard;
