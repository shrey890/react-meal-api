function Footer() {
   return (
      <div className="footer">
         <hr style={{borderStyle:'dotted'}} />
         <p>
            Designed and Developed by  
         </p>
         <p>&copy; Shrey</p>
         <p>
            <a href="https://twitter.com/shrey4875"
            target="_blank"
            >
            <i class="fa-brands fa-twitter"></i>
            {/* <i class="fa-brands fa-square-x-twitter"></i> */}
            </a>
            {'   '} |  {'   '}
            <a href="https://github.com/shrey890"
            target="_blank"
            >
            <i class="fa-brands fa-github"></i>
            </a>
         </p>
    
      </div>
   )
}

export default Footer
