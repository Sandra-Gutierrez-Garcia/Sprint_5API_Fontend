import React from "react";
import "../styles/Form.css";
import "../styles/HomePage.css";
import { getCurrentUser } from "../utils/userStorage";
import Header from "../components/Header"; // Asegúrate de que la ruta sea correcta
import BookCard from "../components/BookCard";
import img1 from "../assets/images/girl-7459130_1280.jpg";
import img2 from "../assets/images/bonfire-9681097_1280.jpg";

function UserProfilePage() {
  const user = getCurrentUser();

  return (
    <div className="profile-page-bg" style={{width:'100vw',minHeight:'100vh',background:'#f5f6fa',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Header />
      <div className="registerpage-new" style={{width:'80vw',maxWidth:'1100px',margin:'40px auto 0 auto',padding:'0',boxSizing:'border-box',borderRadius:'12px',background:'#f8f8f8'}}>
        <section className="profile-section" style={{margin:'2rem auto',maxWidth:'1100px',background:'#fff',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.07)',padding:'2rem'}}>
          <h2 className="form-title" style={{fontSize:'2rem',fontFamily:'Playfair Display, serif',color:'#222',fontWeight:'700',marginBottom:'24px',letterSpacing:'1px'}}>Datos del usuario</h2>
          <div className="profile-header-actions" style={{display:'flex',gap:'18px',justifyContent:'flex-end',marginBottom:'32px',marginTop:'8px',paddingRight:'8px'}}>
            <button className="profile-header-btn" style={{padding:'12px 32px',fontSize:'1.08rem',fontWeight:'600',borderRadius:'12px',minWidth:'140px'}}>Editar perfil</button>
            <button className="profile-header-btn logout" style={{padding:'12px 32px',fontSize:'1.08rem',fontWeight:'600',borderRadius:'12px',minWidth:'140px'}}>Cerrar sesión</button>
          </div>
          {user ? (
            <div className="form user-profile-card" style={{display:'flex',flexDirection:'row',alignItems:'flex-start',gap:'32px',width:'100%',maxWidth:'600px',margin:'0 auto',background:'#fff',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.07)',padding:'32px 40px'}}>
              <div className="user-avatar" style={{display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg, #e0e7fa 0%, #f8e8ee 100%)',borderRadius:'50%',width:'80px',height:'80px',boxShadow:'0 2px 8px rgba(80,80,120,0.07)'}}>
                <span role="img" aria-label="avatar" style={{fontSize:'3rem'}}>👤</span>
              </div>
              <div className="user-info" style={{display:'flex',flexDirection:'column',gap:'16px',width:'100%',alignItems:'flex-start'}}>
                <div style={{display:'flex',flexDirection:'column',gap:'8px',background:'#f5f6fa',borderRadius:'12px',padding:'18px 24px',alignItems:'flex-start'}}>
                  <p style={{margin:0}}><strong>Usuario:</strong> <span className="user-data">{user.username}</span></p>
                  <p style={{margin:0}}><strong>Email:</strong> <span className="user-data">{user.email}</span></p>
                  <p style={{margin:0}}><strong>Contraseña:</strong> <span className="user-data">******</span></p>
                </div>
              </div>
            </div>
          ) : (
            <p style={{color:'#e94e77'}}>No hay usuario logueado.</p>
          )}
        </section>
        <section className="user-fav-books-section" style={{margin:'2rem auto',maxWidth:'1100px',background:'#fff',borderRadius:'12px',boxShadow:'0 2px 8px rgba(0,0,0,0.07)',padding:'2rem'}}>
          <h2 style={{fontSize:'1.3rem', color:'#4a3c8c', marginBottom:'18px'}}>Libros preferidos</h2>
          <div className="user-fav-books-list" style={{display:'flex',gap:'24px',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
            <BookCard
              title="The Crystal Labyrinth"
              author="Samira Voss"
              cover={img1}
              description="A puzzle of mirrors and secrets awaits in the city’s heart."
            />
            <BookCard
              title="Firefly Dreams"
              author="Liam Dray"
              cover={img2}
              description="A summer of fireflies, wishes, and unexpected friendships."
            />
            {/* Puedes agregar más BookCard aquí */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default UserProfilePage;
