
import BuuttonCharacter from "@/components/ButtonCharacter"
import ButtonLocation from "@/components/ButtonLocation"

function ButtonNavigasi() {
  return (
    // 3. Button Navigasi
        <div className="flex space-x-6 pt-6"> 
          <BuuttonCharacter />
          
          <ButtonLocation />
        </div>
  )
}

export default ButtonNavigasi